// netlify/functions/market-data.mjs
//
// Scheduled pipeline: pulls latest prices + upcoming dividends from Twelve Data
// into the SHARED Supabase tables (instruments, prices, dividends).
//
// Designed around the free tier's 8-calls/minute limit: it makes only a
// handful of calls per run — batched quotes (grouped by exchange) plus ONE
// dividend-calendar call for everything — so it stays fast and well under
// both the rate limit and Netlify's function timeout.
//
// DEPLOY: push to your Netlify-connected GitHub repo. Netlify builds in the
// cloud (no CLI needed). The schedule below runs it daily at 06:00 UTC.
//
// ENV VARS (Netlify → Site settings → Environment variables):
//   TWELVE_DATA_KEY            your Twelve Data API key
//   SUPABASE_URL               https://uambxtsgtrpcgmgtmhgi.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY  the sb_secret_/service_role key (SERVER-SIDE ONLY)
//   SEED_SYMBOLS               optional, e.g. "JEGP.GB,KNG.GB,VHYL.GB,SCHD"
//                              used to bootstrap before any holdings exist

const TD = "https://api.twelvedata.com";
const SB = process.env.SUPABASE_URL;
const SB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const TD_KEY = process.env.TWELVE_DATA_KEY;

// --- Supabase REST helpers (dependency-free; service_role bypasses RLS) ---
const sbHeaders = {
  apikey: SB_KEY,
  Authorization: `Bearer ${SB_KEY}`,
  "Content-Type": "application/json",
};

async function sbSelect(path) {
  const r = await fetch(`${SB}/rest/v1/${path}`, { headers: sbHeaders });
  if (!r.ok) throw new Error(`select ${path} -> ${r.status} ${await r.text()}`);
  return r.json();
}

async function sbUpsert(table, rows, onConflict, returnRep = false) {
  if (!rows.length) return [];
  const r = await fetch(`${SB}/rest/v1/${table}?on_conflict=${onConflict}`, {
    method: "POST",
    headers: {
      ...sbHeaders,
      Prefer: `resolution=merge-duplicates,return=${returnRep ? "representation" : "minimal"}`,
    },
    body: JSON.stringify(rows),
  });
  if (!r.ok) throw new Error(`upsert ${table} -> ${r.status} ${await r.text()}`);
  return returnRep ? r.json() : [];
}

// --- Symbol mapping: your ".GB" convention -> Twelve Data params ---
// "JEGP.GB" -> { td: "JEGP", mic: "XLON" };  "SCHD" -> { td: "SCHD", mic: null }
function mapSymbol(displaySymbol) {
  if (displaySymbol.endsWith(".GB")) {
    return { td: displaySymbol.slice(0, -3), mic: "XLON", display: displaySymbol };
  }
  return { td: displaySymbol, mic: null, display: displaySymbol };
}

async function td(pathAndQuery) {
  const sep = pathAndQuery.includes("?") ? "&" : "?";
  const r = await fetch(`${TD}/${pathAndQuery}${sep}apikey=${TD_KEY}`);
  const j = await r.json();
  // Twelve Data returns {status:"error", message:...} with HTTP 200 on some errors.
  if (j.status === "error") throw new Error(`TD error: ${j.message}`);
  return j;
}

// --- Gather the symbols we care about: holdings ∪ instruments ∪ seed ---
async function trackedSymbols() {
  const set = new Set();
  (process.env.SEED_SYMBOLS || "")
    .split(",").map((s) => s.trim()).filter(Boolean)
    .forEach((s) => set.add(s));

  const holdings = await sbSelect("holdings?select=symbol");
  holdings.forEach((h) => set.add(h.symbol));

  const instruments = await sbSelect("instruments?select=symbol");
  instruments.forEach((i) => set.add(i.symbol));

  return [...set];
}

// --- Prices + instrument metadata via batched /quote (grouped by exchange) ---
async function refreshQuotes(symbols) {
  const groups = { XLON: [], US: [] };
  const meta = new Map(); // display -> {td, mic}
  for (const s of symbols) {
    const m = mapSymbol(s);
    meta.set(s, m);
    (m.mic === "XLON" ? groups.XLON : groups.US).push(m);
  }

  const idBySymbol = new Map();
  const today = new Date().toISOString().slice(0, 10);

  for (const [mic, arr] of Object.entries(groups)) {
    if (!arr.length) continue;
    const list = arr.map((m) => m.td).join(",");
    const micParam = mic === "XLON" ? "&mic_code=XLON" : "";
    const q = await td(`quote?symbol=${encodeURIComponent(list)}${micParam}`);

    // Batch responses are keyed by symbol; single responses are the object itself.
    const entries = arr.length === 1 ? { [arr[0].td]: q } : q;

    const instRows = [];
    const priceInputs = [];
    for (const m of arr) {
      const data = entries[m.td];
      if (!data || data.status === "error") continue;
      const display = m.mic === "XLON" ? `${m.td}.GB` : m.td;
      instRows.push({
        symbol: display,
        exchange: data.exchange || (m.mic === "XLON" ? "XLON" : "US"),
        currency: data.currency || "USD",
        name: data.name || null,
      });
      priceInputs.push({ display, close: parseFloat(data.close) });
    }

    // Upsert instruments, get their ids back, then upsert prices.
    const saved = await sbUpsert("instruments", instRows, "symbol,exchange", true);
    saved.forEach((row) => idBySymbol.set(row.symbol, row.id));

    const priceRows = priceInputs
      .filter((p) => idBySymbol.has(p.display) && !Number.isNaN(p.close))
      .map((p) => ({ instrument_id: idBySymbol.get(p.display), as_of: today, close: p.close }));
    await sbUpsert("prices", priceRows, "instrument_id,as_of");
  }

  return idBySymbol; // display symbol -> instrument_id
}

// --- Upcoming/recent dividends via the free per-symbol /dividends endpoint ---
// (The /dividends_calendar endpoint is paid-tier only, so we loop instead.)
async function refreshDividends(idBySymbol) {
  let total = 0;

  for (const [display, id] of idBySymbol) {
    const m = mapSymbol(display);
    const micParam = m.mic === "XLON" ? "&mic_code=XLON" : "";

    let data;
    try {
      // range=last covers recent + upcoming declared dividends for the symbol.
      data = await td(`dividends?symbol=${encodeURIComponent(m.td)}${micParam}&range=last`);
    } catch (e) {
      console.warn(`dividends fetch failed for ${display}: ${e.message}`);
      continue; // one bad symbol shouldn't sink the whole run
    }

    const items = data.dividends || [];
    const rows = [];
    for (const d of items) {
      const amount = parseFloat(d.amount);
      if (Number.isNaN(amount)) continue;
      rows.push({
        instrument_id: id,
        ex_date: d.ex_date || d.ex_dividend_date || null,
        pay_date: d.payment_date || d.pay_date || null,
        amount,
        currency: d.currency || null,
        frequency: d.frequency || null,
      });
    }
    await sbUpsert("dividends", rows, "instrument_id,ex_date,pay_date,amount");
    total += rows.length;

    // Stay well under the free tier's 8-calls/minute limit.
    await new Promise((r) => setTimeout(r, 8000));
  }

  return total;
}

export default async () => {
  try {
    const symbols = await trackedSymbols();
    if (!symbols.length) {
      console.log("No symbols to track yet (set SEED_SYMBOLS or add holdings).");
      return new Response("nothing to do", { status: 200 });
    }
    const idBySymbol = await refreshQuotes(symbols);
    const divCount = await refreshDividends(idBySymbol);
    const msg = `Updated ${idBySymbol.size} instruments, ${divCount} dividend rows.`;
    console.log(msg);
    return new Response(msg, { status: 200 });
  } catch (err) {
    console.error("market-data pipeline failed:", err.message);
    return new Response(err.message, { status: 500 });
  }
};

// Netlify scheduled-function config: daily at 06:00 UTC.
export const config = { schedule: "0 6 * * *" };
