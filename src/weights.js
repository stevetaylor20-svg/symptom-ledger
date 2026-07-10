// =============================================================================
// weights.js
// Regenerated from: "Lymeherbs — A Practical Guide" (herb/supplement summary)
//                    "Lymeherbs — Planner ENG" (symptom/infection worksheets)
// Sources cited inline as [Guide] or [Planner] where a specific claim/dose is
// pulled from that document. Values not directly stated in the source PDFs
// (e.g. weights for symptom pairs the guide only implies) are estimated and
// marked "est." — review before clinical use. This is not medical advice.
// =============================================================================

// -----------------------------------------------------------------------------
// SYMPTOMS
// Expanded to match the Planner's "SYMPTOMS – Severity on a scale of 1-5" card
// plus the original app's symptom set (kept for backwards compatibility).
// -----------------------------------------------------------------------------
export const SYMPTOMS = [
  "Body tremors",              // Planner: "Muscle tremors, limb numbness"
  "Cardiac issues",            // Planner: "Cardiological symptoms"
  "Heart palpitations",
  "Night sweats",
  "Joint pain",                // Planner: "Joint symptoms"
  "Brain fog",                 // Planner: "Brain fog"
  "Fatigue",                   // Planner: "Chronic fatigue"
  "Insomnia",                  // Planner: "Sleep problems"
  "Headache",                  // Planner: "Headaches"
  "Anxiety / Restlessness",    // Planner: "Depression/anxiety/hysteria" (anxiety half)
  "Depression",                // Planner: "Depression/anxiety/hysteria" (depression half)
  "Numbness / Neuropathy",     // Planner: "Neuropathy" / "Muscle tremors, limb numbness"
  "Reduced libido",            // Planner: "Reduced libido"
  "Eye problems",              // Planner: "Eye problems"
  "Edema / Swelling",          // Guide: "Edema, Swelling, and Sluggish Lymph"
  "Gastrointestinal problems", // Planner: "Gastrointestinal problems"
  "Herx reaction",             // Guide: "Herx reaction and detoxification" — die-off flare, not a baseline symptom but tracked so remedies with Herx-mitigation properties surface
];

// -----------------------------------------------------------------------------
// REMEDIES
// Original 15 remedies kept as-is (names unchanged so existing references in
// your app don't break), plus new remedies pulled from the Guide's
// alphabetical herb list and the Planner's per-infection herb tables.
// -----------------------------------------------------------------------------
export const REMEDIES = [
  // --- original set ---
  "Sida Acuta",
  "Cryptolepis",
  "Japanese Knotweed",
  "Cat's Claw",
  "Bidens Pilosa",
  "Artemisia",
  "Allicin",
  "Lumbrokinase",
  "Andrographis",
  "Chinese Skullcap",
  "Houttuynia",
  "Cinnamon Clove & Oregano",
  "Cumanda",
  "Curcumin",
  "Magnesium",
  // --- new: core Buhner Borrelia/Babesia/Bartonella herbs [Guide/Planner] ---
  "Salvia Miltiorrhiza",
  "Alchornea Cordifolia",
  "Ashwagandha",
  "Licorice",
  "Milk Thistle",
  "Schisandra",
  "Korean Ginseng",
  "EGCG",
  "Hawthorn",
  "L-Arginine",
  "Cordyceps",
  "Isatis",
  "Red Root",
  "Rhodiola Rosea",
  "Astragalus",
  // --- new: symptom-targeted support herbs [Guide, "Proposals for Selecting Herb Sets"] ---
  "Cleavers",
  "Gotu Kola",
  "Ginkgo Biloba",
  "Teasel Root",
  "Motherwort",
  "Stephania",
  "Gou Teng",
  "Tryptophan",
  "Valerian (Amantilla)",
  "NAC",
  "Melatonin",
];

// -----------------------------------------------------------------------------
// WEIGHT_MATRIX[remedy][symptom] = weight
// Positive weight = symptom supports recommending the remedy.
// Negative weight = symptom is a soft caution (still shown, just scored down).
// Weights of 3 = herb is a named first-line option for that symptom group in
// the Guide's "Proposals for Selecting Herb Sets" or Planner symptom card.
// Weights of 2 = herb is listed as a secondary/companion option.
// Weights of 1 = herb has a supporting/indirect property noted in the Guide.
// Negative weights = a documented caution that softly counter-indicates use
// for that symptom (not a hard exclusion — see CONTRAINDICATIONS for those).
// -----------------------------------------------------------------------------
export const WEIGHT_MATRIX = {
  "Sida Acuta": {
    "Body tremors": 3, // [Guide] "Tremors: Sida acuta works exceptionally well"
    "Heart palpitations": -3,
    "Night sweats": 1,
    "Brain fog": 1,
    "Fatigue": 1,
    "Numbness / Neuropathy": 3, // [Guide] "highly effective against persistent muscle tremors... internal buzzing... electric currents"
  },
  "Cryptolepis": {
    "Night sweats": 2,
    "Joint pain": 1,
    "Fatigue": 1,
    "Headache": 1,
  },
  "Japanese Knotweed": {
    "Body tremors": 1,
    "Heart palpitations": 1,
    "Joint pain": 3, // [Planner] Joint problems list
    "Brain fog": 2,
    "Headache": 1,
    "Cardiac issues": 2, // [Guide] "protects the heart muscle... mitigates cardiac symptoms like palpitations, chest pain, and shortness of breath"
    "Numbness / Neuropathy": 1, // [Planner] Muscle tremors/numbness list
  },
  "Cat's Claw": {
    "Joint pain": 3,
    "Brain fog": 1,
    "Fatigue": 1,
    "Insomnia": -1,
  },
  "Bidens Pilosa": {
    "Body tremors": 1,
    "Night sweats": 1,
    "Joint pain": 1,
    "Fatigue": 2,
  },
  "Artemisia": {
    "Heart palpitations": -1,
    "Night sweats": 2,
    "Brain fog": 1,
    "Fatigue": -1,
    "Insomnia": -1,
    "Headache": 1,
  },
  "Allicin": {
    "Fatigue": 1,
    "Joint pain": 1,
    "Headache": 1,
    "Night sweats": 1,
  },
  "Lumbrokinase": {
    "Joint pain": 2,
    "Brain fog": 1,
    "Fatigue": 1,
  },
  "Andrographis": {
    "Fatigue": 1,
    "Headache": 1,
    "Night sweats": 1,
    "Joint pain": 1,
    "Cardiac issues": 1, // [Guide] "protects the heart muscle"
  },
  "Chinese Skullcap": {
    "Brain fog": 2,
    "Insomnia": 1,
    "Headache": 1,
    "Joint pain": 1,
    "Anxiety / Restlessness": 2, // [Planner] "Feeling of anxiety, restlessness" list
  },
  "Houttuynia": {
    "Night sweats": 1,
    "Fatigue": 1,
    "Headache": 1,
  },
  "Cinnamon Clove & Oregano": {
    "Fatigue": 1,
    "Joint pain": 1,
    "Night sweats": 1,
    "Headache": 1,
  },
  "Cumanda": {
    "Joint pain": 1,
    "Fatigue": 1,
    "Night sweats": 1,
  },
  "Curcumin": {
    "Joint pain": 3, // [Guide] joint problems set
    "Brain fog": 1,
    "Headache": 1,
  },
  "Magnesium": {
    "Body tremors": 2,
    "Insomnia": 2,
    "Heart palpitations": 1,
    "Joint pain": 1,
    "Fatigue": 1,
  },

  // --- new remedies ---
  "Salvia Miltiorrhiza": {
    "Brain fog": 2, // [Guide] "protection for the Golgi apparatus of nerve cells"
    "Edema / Swelling": 2, // [Guide] Edema/lymph set
    "Numbness / Neuropathy": 1,
    "Cardiac issues": 1,
  },
  "Alchornea Cordifolia": {
    "Fatigue": 1,
    "Numbness / Neuropathy": 1, // protects erythrocytes, relevant to Babesia/Bartonella
  },
  "Ashwagandha": {
    "Insomnia": 2, // [Planner] Sleep problems list
    "Depression": 1, // [Guide] depression set
    "Brain fog": 1,
    "Fatigue": 1,
    "Anxiety / Restlessness": 1,
  },
  "Licorice": {
    "Fatigue": 1,
  },
  "Milk Thistle": {
    "Fatigue": 1,
    "Gastrointestinal problems": 1, // liver-support, indirectly digestive
  },
  "Schisandra": {
    "Fatigue": 2,
    "Insomnia": 1, // [Planner] Sleep problems list
    "Anxiety / Restlessness": -1, // [Guide] caution in acute hyperexcitability/insomnia
    "Cardiac issues": -1, // [Guide] caution with organic heart disorders
  },
  "Korean Ginseng": {
    "Fatigue": 2,
    "Reduced libido": 2,
  },
  "EGCG": {
    "Fatigue": 1,
    "Cardiac issues": 1,
    "Brain fog": 1,
  },
  "Hawthorn": {
    "Cardiac issues": 3, // [Guide] core cardiac herb
    "Heart palpitations": 2,
  },
  "L-Arginine": {
    "Reduced libido": 2,
    "Fatigue": 1,
  },
  "Cordyceps": {
    "Fatigue": 2,
    "Reduced libido": 1,
    "Brain fog": 1,
    "Cardiac issues": 1,
  },
  "Isatis": {
    "Fatigue": 1,
  },
  "Red Root": {
    "Edema / Swelling": 2,
  },
  "Rhodiola Rosea": {
    "Fatigue": 2,
    "Brain fog": 1,
    "Depression": 1,
    "Insomnia": -1, // [Guide] "do not take close to bedtime" — some experience jitters
  },
  "Astragalus": {
    "Fatigue": 1,
  },
  "Cleavers": {
    "Edema / Swelling": 3, // [Guide] core lymph/edema herb
  },
  "Gotu Kola": {
    "Brain fog": 2,
    "Edema / Swelling": 1,
    "Depression": 1,
  },
  "Ginkgo Biloba": {
    "Brain fog": 2,
    "Numbness / Neuropathy": 2,
    "Headache": 1,
    "Cardiac issues": 1,
  },
  "Teasel Root": {
    "Joint pain": 2,
  },
  "Motherwort": {
    "Anxiety / Restlessness": 2,
    "Cardiac issues": 1,
    "Heart palpitations": 2,
    "Depression": 1,
    "Insomnia": 1,
  },
  "Stephania": {
    "Cardiac issues": 1,
    "Numbness / Neuropathy": 1,
    "Eye problems": 2, // [Guide] "delivers the best results" for ocular Lyme/Bell's Palsy
    "Joint pain": 1,
  },
  "Gou Teng": {
    "Brain fog": 2, // [Guide] baseline neuroborreliosis herb alongside Tryptophan
    "Anxiety / Restlessness": 2,
    "Numbness / Neuropathy": 1,
  },
  "Tryptophan": {
    "Depression": 2,
    "Insomnia": 2,
    "Anxiety / Restlessness": 1,
  },
  "Valerian (Amantilla)": {
    "Insomnia": 3,
    "Anxiety / Restlessness": 1,
  },
  "NAC": {
    "Brain fog": 1,
    "Fatigue": 1,
    "Herx reaction": 2, // [Guide] Herx/detox set
  },
  "Melatonin": {
    "Insomnia": 3,
    "Depression": 1,
  },
};

// -----------------------------------------------------------------------------
// REMEDY_INFO — description + a general (non symptom-linked) caution pulled
// from the Guide's contraindication notes for each herb, where documented.
// -----------------------------------------------------------------------------
export const REMEDY_INFO = {
  "Sida Acuta": {
    "description":
      "A traditional herb used broadly for its calming, antimicrobial properties. Commonly reached for when neurological-type symptoms like tremors are present.",
  },
  "Cryptolepis": {
    "description":
      "An African-origin herb often used for its broad antimicrobial action, particularly associated with addressing night sweats and general systemic support.",
  },
  "Japanese Knotweed": {
    "description":
      "Contains resveratrol and is often used for joint support and circulatory benefits, alongside general anti-inflammatory use.",
    "caution":
      "Do not combine with blood-thinning medications; stop 10 days before surgery. [Guide]",
  },
  "Cat's Claw": {
    "description":
      "A South American vine traditionally used for joint and immune support, with anti-inflammatory properties. In Lyme protocols it is also used to help maintain CD57+ T-cell counts.",
    "caution":
      "Contraindicated with blood thinners; stop 10 days before surgery; cannot be used with stomach acid blockers (PPIs), which prevent conversion to its active form. [Guide]",
  },
  "Bidens Pilosa": {
    "description":
      "A flowering plant used traditionally for general immune and inflammatory support, often included in broader symptom-relief protocols.",
  },
  "Artemisia": {
    "description":
      "Best known for antiparasitic use, also used more broadly for general systemic support, though carries more cautions than some alternatives.",
    "caution":
      "Isolated artemisinin carries a resistance risk with continuous use — periodic breaks are required. [Guide]",
  },
  "Allicin": {
    "description":
      "A compound derived from garlic, used for its broad antimicrobial properties and general immune support.",
  },
  "Lumbrokinase": {
    "description":
      "An enzyme derived from earthworms, used for fibrinolytic activity and often associated with biofilm-disruption strategies.",
  },
  "Andrographis": {
    "description":
      "A primary Buhner-protocol herb with clear anti-spirochete properties; crosses the blood-brain barrier and protects the heart muscle. [Guide]",
    "caution":
      "Can trigger allergic skin rashes in roughly 1% of users — start low and discontinue if a rash appears. [Guide]",
  },
  "Chinese Skullcap": {
    "description":
      "An herb used traditionally for calming and anti-inflammatory effects, often associated with cognitive and sleep-related support.",
    "caution":
      "Can alter insulin/blood sugar levels (caution for type 1 diabetics) and may interact with blood-pressure-lowering medications. [Guide]",
  },
  "Houttuynia": {
    "description":
      "An herb used traditionally for antimicrobial and immune-supportive purposes, prominent in Bartonella and Mycoplasma protocols.",
  },
  "Cinnamon Clove & Oregano": {
    "description":
      "A blend of antimicrobial botanicals commonly used together, often associated with biofilm-disruption strategies.",
  },
  "Cumanda": {
    "description":
      "A South American herb used traditionally for antimicrobial and general systemic support.",
  },
  "Curcumin": {
    "description":
      "The active compound in turmeric, widely used for its anti-inflammatory properties, particularly for joint-related symptoms.",
  },
  "Magnesium": {
    "description":
      "An essential mineral involved in muscle and nerve function, often used to support tremors, sleep, and general relaxation.",
  },
  "Salvia Miltiorrhiza": {
    "description":
      "Red Sage / Dan Shen. A master modulator of the cytokine cascade; protects the Golgi apparatus of nerve cells and the lymphatic endothelium. Considered a core foundational herb across Borrelia, Babesia, Chlamydia, Ehrlichia and Rickettsia protocols. [Guide]",
    "caution":
      "In severe neurological cases, standard dose can safely be increased 2–3 fold per Buhner — do this only under guidance. [Guide]",
  },
  "Alchornea Cordifolia": {
    "description":
      "A systemic herb concentrating in the bloodstream; used against Babesia and Bartonella, also effective vs. Candida and resistant bacteria. Protects red blood cells. [Guide]",
    "caution":
      "High doses can sedate the CNS — should not be combined with large doses of antidepressants or sedatives. [Guide] Relevant if taking duloxetine or mirtazapine — flag for prescriber review.",
  },
  "Ashwagandha": {
    "description":
      "Lowers IL-10 cytokine levels, shifts Th2 immune responses, and acts as a mood stabilizer and sleep aid across nearly every co-infection protocol. [Guide]",
    "caution":
      "Should never be combined with pharmaceutical sedatives or anti-anxiety medications. May cause mild digestive upset in rare cases. [Guide] Relevant if taking duloxetine or mirtazapine — flag for prescriber review.",
  },
  "Licorice": {
    "description":
      "A powerful antiviral herb and exceptional synergist used in Babesia, Chlamydia, Ehrlichia and Yersinia protocols. Should be used in combination blends rather than as a standalone. [Guide]",
    "caution":
      "Completely contraindicated in hypertension, hypokalemia, hypernatremia, and low testosterone. Not for continuous use beyond 4–6 weeks. [Guide]",
  },
  "Milk Thistle": {
    "description":
      "Substantially optimizes liver health, shielding hepatic tissue from chemical, environmental and viral toxins; supports detox capacity. [Guide]",
  },
  "Schisandra": {
    "description":
      "An adaptogen that lowers circulating stress hormones and provides deep liver and heart protection. [Guide]",
    "caution":
      "Not for use in acute nervous hyperexcitability, severe insomnia, severe hypertension, or organic heart disorders. [Guide]",
  },
  "Korean Ginseng": {
    "description":
      "Increases vitality and blood flow, strengthens immune parameters, and supports libido and glucose regulation. [Guide]",
    "caution":
      "Lowers blood pressure (unlike Siberian Ginseng) — use caution if you have low blood pressure. [Guide]",
  },
  "EGCG": {
    "description":
      "The most active catechin in green tea; a powerful antioxidant and neuroprotective agent that also increases regulatory T-cell counts. [Guide]",
    "caution":
      "Avoid if hypersensitive to caffeine. [Guide]",
  },
  "Hawthorn": {
    "description":
      "Addresses most primary cardiovascular symptoms — atherosclerosis, arrhythmias, congestive heart failure, hypertension. Central herb in Bartonella cardiac protocols. [Guide]",
    "caution":
      "Must be strictly avoided by individuals who already have pathologically low blood pressure. [Guide]",
  },
  "L-Arginine": {
    "description":
      "An amino acid central to Nitric Oxide production; supports vascular dilation, nutrient transport, and libido. [Guide]",
    "caution":
      "Contraindicated in asthma, biliary obstruction, severe hypertension, digestive disorders, renal impairment, hepatic insufficiency, and schizophrenia. Prolonged uncycled use can raise blood pressure. [Guide]",
  },
  "Cordyceps": {
    "description":
      "A medicinal mushroom and adaptogen; protects mitochondria, intelligently modulates immune activity, and is helpful for low libido and brain fog. [Guide]",
  },
  "Isatis": {
    "description":
      "Used against Bartonella and Mycoplasma; a potent immune stimulant with anti-inflammatory action. [Guide]",
    "caution":
      "Never take for more than 3 consecutive weeks without a break — prolonged/high-dose use can overtax the kidneys. [Guide]",
  },
  "Red Root": {
    "description":
      "A powerful stimulant and tonic for the lymphatic system; tones mucosal linings and lowers liver/spleen inflammation. [Guide]",
    "caution":
      "A potent blood coagulant — never combine with pharmaceutical coagulants or anticoagulants. [Guide]",
  },
  "Rhodiola Rosea": {
    "description":
      "An adaptogen used heavily for adrenal fatigue, chronic exhaustion and focus deficits, with anti-depressive benefits and mitochondrial protection. [Guide]",
    "caution":
      "Some people experience jitters/over-stimulation — avoid taking close to bedtime until tolerance is confirmed. [Guide]",
  },
  "Astragalus": {
    "description":
      "An immunostimulating herb that upregulates interferon-gamma/IL-2 and raises CD4 counts; recommended for pre-exposure and early-stage Lyme. [Guide]",
    "caution":
      "Contraindicated in late-stage chronic Lyme disease — stimulates already elevated Th1 immune pathways and can severely aggravate existing symptoms. Strictly for pre-exposure, early localized, and early disseminated stages only. [Guide] See ILLNESS_CONTRAINDICATIONS below.",
  },
  "Cleavers": {
    "description":
      "Reduces generalized edema and regulates systemic fluid balance; decongests stagnant lymphatic pathways and fortifies liver/spleen/pancreatic function. [Guide]",
  },
  "Gotu Kola": {
    "description":
      "Maintains elasticity in venous walls and capillaries; explicitly recommended by Buhner for memory deficits, word-finding difficulty, and brain fog. [Guide]",
  },
  "Ginkgo Biloba": {
    "description":
      "Enhances blood vessel function and protects nerve tissue from myelin degradation; widely used for brain fog and word-finding challenges. [Guide]",
    "caution":
      "Circulatory disease patients should consult a physician before use. [Guide]",
  },
  "Teasel Root": {
    "description":
      "Exerts bacteriostatic action against Borrelia and acts as an anti-inflammatory/anti-rheumatic agent; accelerates connective tissue repair. [Guide]",
  },
  "Motherwort": {
    "description":
      "Recommended for migraines and depression due to reliable sedative properties; balances CNS and vegetative nervous systems and stabilizes cardiac rhythm during emotional stress. [Guide]",
  },
  "Stephania": {
    "description":
      "Primary Buhner herb for ocular Lyme and Bell's Palsy; reduces neuro-inflammation and calms autoimmune joint flare-ups. Acts as a calcium channel blocker. [Guide]",
    "caution":
      "Roughly half of patients on pharmaceutical calcium channel blockers experience problems combining them with Stephania — consult a physician. Completely contraindicated with AV heart block and must never be combined with anti-arrhythmic drugs or digoxin. [Guide]",
  },
  "Gou Teng": {
    "description":
      "Baseline neuroborreliosis herb (with Tryptophan) per Buhner's core recommendations; addresses neuro-inflammation with anti-epileptic properties. [Guide]",
    "caution":
      "Lowers blood pressure — those with hypotensive tendencies should monitor status or swap for an alternative. [Guide]",
  },
  "Tryptophan": {
    "description":
      "Essential amino acid and direct precursor to serotonin and melatonin; baseline neuroborreliosis support alongside Gou teng. [Guide]",
    "caution":
      "Never take together with 5-HTP — both regulate the same pathway; combining them is redundant, not additive. [Guide]",
  },
  "Valerian (Amantilla)": {
    "description":
      "A high-potency valerian root extract (Nutramedix: Amantilla) that boosts GABA levels for a calming, sedative effect. [Guide]",
  },
  "NAC": {
    "description":
      "A stable precursor to glutathione; clears free radicals and toxins, has mucolytic properties, and is invaluable for minimizing Herxheimer reactions. [Guide]",
    "caution":
      "Use caution with asthma, bleeding disorders, active ulcers, respiratory failure, or specific methylation impairments. [Guide]",
  },
  "Melatonin": {
    "description":
      "The primary sleep-cycle hormone; highly indicated for stubborn insomnia tied to circadian disruption. [Guide]",
  },
};

// -----------------------------------------------------------------------------
// CONTRAINDICATIONS — hard rules that override the plain weighted score,
// keyed by SYMPTOM (kept from the original schema).
// mode: "exclude" -> remedy is removed from the ranked list entirely and
//                     shown in "Not recommended" instead, with the reason.
// mode: "dampen"   -> remedy stays ranked, but its score for that symptom
//                     is multiplied by `factor`.
// -----------------------------------------------------------------------------
export const CONTRAINDICATIONS = {
  "Sida Acuta": {
    "Cardiac issues": {
      "mode": "exclude",
      "note":
        "Cardiac issues is treated as a hard contraindication for Sida Acuta in this sample data, so it is not offered at all when that symptom is selected — regardless of how strongly other symptoms point toward it.",
    },
  },
  "Artemisia": {
    "Cardiac issues": {
      "mode": "dampen",
      "factor": 0.25,
      "note":
        "Cardiac issues heavily dampens Artemisia's score rather than excluding it outright, since this caution is treated as relative rather than absolute in this sample data.",
    },
  },
  "Licorice": {
    "Cardiac issues": {
      "mode": "exclude",
      "note":
        "Licorice is completely contraindicated in hypertension, hypokalemia and hypernatremia [Guide] — excluded outright when cardiac issues are present.",
    },
  },
  "Schisandra": {
    "Cardiac issues": {
      "mode": "dampen",
      "factor": 0.3,
      "note":
        "Not for use in severe hypertension or organic heart disorders [Guide] — dampened rather than excluded since severity varies.",
    },
    "Anxiety / Restlessness": {
      "mode": "dampen",
      "factor": 0.4,
      "note":
        "Not for use in acute nervous hyperexcitability or severe insomnia [Guide].",
    },
  },
  "L-Arginine": {
    "Cardiac issues": {
      "mode": "dampen",
      "factor": 0.3,
      "note":
        "Contraindicated in severe hypertension; prolonged uncycled use can itself raise blood pressure [Guide].",
    },
  },
  "Stephania": {
    "Cardiac issues": {
      "mode": "exclude",
      "note":
        "Completely contraindicated with AV heart block and must never be combined with anti-arrhythmic drugs or digoxin; ~50% of patients on calcium channel blockers have issues combining them with Stephania [Guide].",
    },
  },
  "Rhodiola Rosea": {
    "Insomnia": {
      "mode": "dampen",
      "factor": 0.4,
      "note":
        "Can cause jitters/over-stimulation in some individuals — avoid close to bedtime until tolerance is confirmed [Guide].",
    },
  },
  "Hawthorn": {
    "Heart palpitations": {
      "mode": "dampen",
      "factor": 0.7,
      "note":
        "Generally indicated for cardiac symptoms, but must be avoided if the person already has pathologically low blood pressure — dampened to prompt a check rather than excluded outright, since low-BP status isn't tracked as a separate symptom here [Guide].",
    },
  },
};

// -----------------------------------------------------------------------------
// DIAGNOSED ILLNESSES — new: static list of tick-borne diagnoses this app can
// link remedies to, independent of symptom-based scoring. Weights below are
// derived from the Guide's "Buhner Herbs List" cross-reference table and the
// per-infection "Buhner Protocol" / "Buhner Basic/Extended Protocol" panels
// in the Planner.
//
// Weight scale (illness-specific, separate from WEIGHT_MATRIX):
//   3 = named in the core/basic Buhner protocol for this infection
//   2 = named in the extended Buhner protocol or Researched Nutritionals set
//   1 = cross-referenced in the "Buhner Herbs List" summary table only
// -----------------------------------------------------------------------------
export const DIAGNOSED_ILLNESSES = ["Lyme (Borrelia)", "Babesia", "Bartonella"];

export const ILLNESS_INFO = {
  "Lyme (Borrelia)": {
    "description":
      "Core Buhner Basic Protocol: Andrographis paniculata, Cat's claw, Japanese knotweed, Salvia miltiorrhiza, Chinese skullcap, plus Collagen and Selenium. [Guide/Planner]",
  },
  "Babesia": {
    "description":
      "Core Buhner Basic Protocol: Alchornea cordifolia, Cryptolepis sanguinolenta, Sida acuta. Extended protocol adds Ashwagandha, Artemisinin, Bidens pilosa, Licorice, Milk thistle, Salvia miltiorrhiza, Schisandra, Korean ginseng. [Guide/Planner]",
  },
  "Bartonella": {
    "description":
      "Core Buhner Basic Protocol: EGCG, Hawthorn, Houttuynia cordata, L-arginine, Milk thistle, Japanese knotweed, Sida acuta. Extended protocol adds Alchornea cordifolia, Ashwagandha, Cordyceps, Isatis, Red root, Rhodiola rosea. [Guide/Planner]",
  },
};

export const ILLNESS_REMEDY_WEIGHTS = {
  "Lyme (Borrelia)": {
    "Andrographis": 3,
    "Cat's Claw": 3,
    "Japanese Knotweed": 3,
    "Salvia Miltiorrhiza": 3,
    "Chinese Skullcap": 3,
    "Ashwagandha": 1, // neuroborreliosis support list
    "Sida Acuta": 1, // neuroborreliosis support list
    "Houttuynia": 1, // biofilm disruption list
  },
  "Babesia": {
    "Alchornea Cordifolia": 3,
    "Cryptolepis": 3,
    "Sida Acuta": 3,
    "Ashwagandha": 2,
    "Artemisia": 2, // Artemisinin
    "Bidens Pilosa": 2,
    "Licorice": 2,
    "Milk Thistle": 2,
    "Salvia Miltiorrhiza": 2,
    "Schisandra": 2,
    "Korean Ginseng": 2,
  },
  "Bartonella": {
    "EGCG": 3,
    "Hawthorn": 3,
    "Houttuynia": 3,
    "L-Arginine": 3,
    "Milk Thistle": 3,
    "Japanese Knotweed": 3,
    "Sida Acuta": 3,
    "Alchornea Cordifolia": 2,
    "Ashwagandha": 2,
    "Cordyceps": 2,
    "Isatis": 2,
    "Red Root": 2,
    "Rhodiola Rosea": 2,
  },
};

// Illness-level hard contraindications — same exclude/dampen schema as
// CONTRAINDICATIONS above, but keyed by illness rather than symptom.
export const ILLNESS_CONTRAINDICATIONS = {
  "Lyme (Borrelia)": {
    "Astragalus": {
      "mode": "exclude",
      "note":
        "Astragalus is contraindicated in late-stage chronic Lyme disease — it stimulates already-elevated Th1 immune pathways and can severely aggravate existing symptoms. Strictly indicated for pre-exposure, early localized, and early disseminated stages only. [Guide]",
    },
  },
};