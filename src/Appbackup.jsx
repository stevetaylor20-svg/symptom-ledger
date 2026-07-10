import React, { useMemo, useState } from "react";
import { Leaf, AlertTriangle, Plus, Minus, RotateCcw, Ban } from "lucide-react";
import { SYMPTOMS, REMEDIES, WEIGHT_MATRIX, CONTRAINDICATIONS } from "./weights.js";

function fmt(n) {
  return Number.isInteger(n) ? n : Math.round(n * 100) / 100;
}

function explainRemedy(entries) {
  const positives = entries.filter((e) => e.weight > 0).sort((a, b) => b.weight - a.weight);
  const negatives = entries.filter((e) => e.weight < 0).sort((a, b) => a.weight - b.weight);
  const dampened = entries.filter((e) => e.dampened);

  const parts = [];
  if (positives.length) {
    parts.push(`Shown mainly because of ${positives.map((p) => p.symptom.toLowerCase()).join(", ")}.`);
  } else {
    parts.push("No strong positive indicators from your current selection — included for reference only.");
  }
  if (negatives.length) {
    const plural = negatives.length > 1;
    parts.push(
      `Pulled down by ${negatives.map((n) => n.symptom.toLowerCase()).join(", ")}, which ${
        plural ? "are caution flags" : "is a caution flag"
      } for this remedy.`
    );
  }
  dampened.forEach((d) => {
    parts.push(
      `${d.symptom} heavily dampens this remedy's weight (down to ${Math.round(
        d.factor * 100
      )}% of normal) rather than ruling it out.`
    );
  });
  return parts.join(" ");
}

function scoreRemedies(selected) {
  const included = [];
  const excluded = [];

  REMEDIES.forEach((remedy) => {
    const weights = WEIGHT_MATRIX[remedy] || {};
    const contra = CONTRAINDICATIONS[remedy] || {};
    const relevant = selected.filter((s) => weights[s] !== undefined);

    if (relevant.length === 0) return;

    const exclusionSymptom = selected.find((s) => contra[s]?.mode === "exclude");
    if (exclusionSymptom) {
      excluded.push({
        remedy,
        symptom: exclusionSymptom,
        reason: contra[exclusionSymptom].note,
      });
      return;
    }

    let total = 0;
    const entries = relevant.map((symptom) => {
      const baseWeight = weights[symptom];
      const c = contra[symptom];
      if (c?.mode === "dampen") {
        const weight = fmt(baseWeight * c.factor);
        total += weight;
        return { symptom, weight, dampened: true, factor: c.factor };
      }
      total += baseWeight;
      return { symptom, weight: baseWeight };
    });

    included.push({ remedy, entries, total: fmt(total), explanation: explainRemedy(entries) });
  });

  included.sort((a, b) => b.total - a.total);
  return { included, excluded };
}

export default function App() {
  const [selected, setSelected] = useState([]);

  const { included, excluded } = useMemo(() => scoreRemedies(selected), [selected]);

  function toggleSymptom(symptom) {
    setSelected((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  }

  return (
    <div style={{ background: PALETTE.ink, minHeight: "100vh", color: PALETTE.bone }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .display { font-family: 'Fraunces', serif; }
        .body-font { font-family: 'IBM Plex Sans', sans-serif; }
        .mono { font-family: 'IBM Plex Mono', monospace; }
        .chip { transition: all 0.15s ease; }
        .chip:hover { transform: translateY(-1px); }
        .card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
      `}</style>

      <div className="max-w-3xl mx-auto px-6 py-16 body-font">
        {/* Header */}
        <div className="mb-12">
          <div className="mono text-xs tracking-widest uppercase mb-3" style={{ color: PALETTE.moss }}>
            Symptom Cross-Reference — Sample Build
          </div>
          <h1 className="display text-5xl mb-3" style={{ color: PALETTE.bone }}>
            The Ledger
          </h1>
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: PALETTE.mutedBone }}>
            Select the symptoms present. Each remedy tallies a running score from every
            symptom you pick, and some symptoms carry hard rules of their own — excluding
            a remedy outright, or dampening its score, regardless of what the plain weights say.
          </p>
        </div>

        {/* Disclaimer */}
        <div
          className="flex gap-3 items-start rounded p-4 mb-10 text-xs leading-relaxed"
          style={{ background: "rgba(181,101,29,0.12)", border: `1px solid ${PALETTE.rust}` }}
        >
          <AlertTriangle size={16} style={{ color: PALETTE.rust, flexShrink: 0, marginTop: 2 }} />
          <span style={{ color: PALETTE.mutedBone }}>
            All symptoms, remedies, weights and contraindications live in{" "}
            <code className="mono">weights.js</code> as placeholder sample data. Replace it
            with your own reviewed source before using this for anything real.
          </span>
        </div>

        {/* Symptom picker */}
        <div className="mb-4 flex items-center justify-between">
          <span className="mono text-xs tracking-widest uppercase" style={{ color: PALETTE.moss }}>
            Select symptoms
          </span>
          {selected.length > 0 && (
            <button
              onClick={() => setSelected([])}
              className="mono text-xs flex items-center gap-1 opacity-70 hover:opacity-100"
              style={{ color: PALETTE.mutedBone }}
            >
              <RotateCcw size={12} /> reset
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-14">
          {SYMPTOMS.map((symptom) => {
            const active = selected.includes(symptom);
            return (
              <button
                key={symptom}
                onClick={() => toggleSymptom(symptom)}
                className="chip mono text-sm px-4 py-2 rounded-full border"
                style={{
                  borderColor: active ? PALETTE.moss : "rgba(241,236,223,0.25)",
                  background: active ? PALETTE.moss : "transparent",
                  color: active ? PALETTE.ink : PALETTE.bone,
                }}
              >
                {symptom}
              </button>
            );
          })}
        </div>

        {/* Ranked results */}
        <div className="mono text-xs tracking-widest uppercase mb-4" style={{ color: PALETTE.moss }}>
          Ranked outcomes
        </div>

        {included.length === 0 && excluded.length === 0 && (
          <p className="text-sm italic mb-10" style={{ color: PALETTE.mutedBone }}>
            Select at least one symptom to see recommendations.
          </p>
        )}

        <div className="flex flex-col gap-4 mb-10">
          {included.map(({ remedy, entries, total, explanation }) => {
            const caution = total < 0;
            return (
              <div
                key={remedy}
                className="card rounded-lg p-5"
                style={{
                  background: PALETTE.bone,
                  color: PALETTE.ink,
                  borderLeft: `4px solid ${caution ? PALETTE.rust : PALETTE.moss}`,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Leaf size={16} style={{ color: caution ? PALETTE.rust : PALETTE.moss }} />
                    <span className="display text-xl">{remedy}</span>
                  </div>
                  <span
                    className="mono text-sm px-2 py-1 rounded"
                    style={{
                      background: caution ? "rgba(181,101,29,0.15)" : "rgba(124,148,115,0.18)",
                      color: caution ? PALETTE.rust : PALETTE.mossDark,
                    }}
                  >
                    {total > 0 ? `+${total}` : total}
                  </span>
                </div>

                <div className="flex flex-col gap-1 mb-3">
                  {entries.map(({ symptom, weight, dampened }) => (
                    <div
                      key={symptom}
                      className="mono text-xs flex items-center justify-between py-1"
                      style={{ borderBottom: "1px solid rgba(31,42,36,0.08)" }}
                    >
                      <span className="flex items-center gap-2">
                        {weight >= 0 ? (
                          <Plus size={11} style={{ color: PALETTE.mossDark }} />
                        ) : (
                          <Minus size={11} style={{ color: PALETTE.rust }} />
                        )}
                        {symptom}
                        {dampened && <span style={{ opacity: 0.6 }}>(dampened)</span>}
                      </span>
                      <span style={{ color: weight >= 0 ? PALETTE.mossDark : PALETTE.rust }}>
                        {weight > 0 ? `+${weight}` : weight}
                      </span>
                    </div>
                  ))}
                </div>

                <p
                  className="text-xs leading-relaxed italic"
                  style={{ color: PALETTE.mossDark, borderTop: "1px solid rgba(31,42,36,0.1)", paddingTop: 10 }}
                >
                  {explanation}
                </p>
              </div>
            );
          })}
        </div>

        {excluded.length > 0 && (
          <>
            <div className="mono text-xs tracking-widest uppercase mb-4" style={{ color: PALETTE.rust }}>
              Not recommended
            </div>
            <div className="flex flex-col gap-3">
              {excluded.map(({ remedy, reason }) => (
                <div
                  key={remedy}
                  className="rounded-lg p-4 flex gap-3 items-start"
                  style={{ background: "rgba(181,101,29,0.08)", border: `1px solid ${PALETTE.rust}` }}
                >
                  <Ban size={16} style={{ color: PALETTE.rust, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div className="display text-lg mb-1" style={{ color: PALETTE.bone }}>
                      {remedy}
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: PALETTE.mutedBone }}>
                      {reason}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const PALETTE = {
  ink: "#16211C",
  bone: "#F1ECDF",
  mutedBone: "#B9C2B6",
  moss: "#7C9473",
  mossDark: "#4E6647",
  rust: "#B5651D",
};