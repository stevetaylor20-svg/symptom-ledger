// =============================================================================
// weights.js
// Regenerated from:
//   "Lymeherbs — A Practical Guide" (herb/supplement summary)          [Guide]
//   "Lymeherbs — Planner ENG" (symptom/infection worksheets)          [Planner]
//   "Lymeherbs — Lyme Disease Protocol" (step-by-step Borrelia)  [Lyme (Borrelia) Protocol]
//   "Lymeherbs — Babesia Protocol" (step-by-step)                [Babesia Protocol]
//   "Lymeherbs — Bartonella Protocol" (step-by-step)              [Bartonella Protocol]
//   "Napiers CLAID Herbal Protocol" (patient letter — herb actions
//    for the Rotational Mix One/Two, Support Mix and Sleep Mix)          [Napiers]
// Sources cited inline with the bracketed tags above where a specific
// claim/dose is pulled from that document. Values not directly stated in the
// source PDFs (e.g. weights for symptom pairs the guide only implies) are
// estimated and marked "est." — review before clinical use. This is not
// medical advice.
//
// GENERAL_CAUTIONS below holds blanket rules stated across every protocol
// document rather than tied to one remedy or illness — check those too.
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
  // --- new: diagnostic/neurological groupings from the Guide's "Proposals
  // for Selecting Herb Sets" that aren't captured by the general symptoms
  // above ---
  "Neurological", // Guide: "Neuroborelioza – Basic Herbs for Neurological Symptoms"
  "Demyelination",     // Guide: "Neuronal Demyelination"
  "Bell's Palsy",               // Guide: "Bell's Palsy"
  "Neurogenic pain",            // Guide: "Neurogenic Pain"
  "Bacterial neurotoxin burden", // Guide: "Removal of Bacterial Neurotoxins"
  // --- new: symptoms surfaced from individual herb descriptions in the
  // Guide's "Alphabetical Summary of Herbs & Supplements" (not part of the
  // "Proposals for Selecting Herb Sets" section, but named directly in a
  // herb's own writeup) ---
  "Circulatory issues",        // Guide: Gotu Kola "supporting the entire circulatory system"; distinct from "Cardiac issues" (heart-specific)
  "Respiratory issues",        // Guide: Angelica sinensis "recommended for... respiratory issues"; Chinese Senega "respiratory tract inflammations, pneumonia, and asthma"
  "Urinary tract issues",      // Guide: Bidens pilosa "highly effective for recurrent urinary tract infections"
  "Skin issues",                // Guide: Sarsaparilla "resolving Lyme-related skin issues"
  "Tinnitus / Hearing issues", // Guide: Taurine "can also significantly improve or eliminate tinnitus... and hearing decline"
  "Fever",                      // Guide: Boneset "used primarily to reduce fevers"
  "Sore throat",                 // Guide: Echinacea angustifolia "superb for throat infections and tonsillitis"
  "Wound healing",              // Guide: Bromelain "accelerating wound healing"; Echinacea angustifolia (topical)
  "Candida / Fungal overgrowth", // Guide: Olive Leaf "a staple for systemic candidiasis"
  "Anemia",                      // Guide: Folic Acid "deficiencies lead to anemia"
  "Motor coordination / balance", // Guide: Acetyl-L-Carnitine (ALCAR) "improve cognitive processing, mood, motor coordination"
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
  // --- new: herbs/supplements from the Guide's "Proposals for Selecting Herb
  // Sets" section that weren't previously tracked as remedies [Guide] ---
  "Glutathione",
  "Rg3 Nasal Spray",
  "Lion's Mane",
  "Chinese Senega",
  "BDNF Essentials",
  "Kudzu",
  "Vitamin B12",
  "Greater Celandine",
  "PEA",
  "CBD Oil",
  "Angelica Sinensis",
  "Mucuna Pruriens",
  "SAMe",
  "Burbur-Pinella",
  "5-HTP",
  "Siberian Ginseng",
  "ATP Fuel",
  "ATP 360",
  "NT Factor Energy",
  "D-Ribose",
  "NADH",
  "L-Carnitine",
  "Alpha Lipoic Acid",
  "Adrenal Cortex",
  "Energy Multi-Plex",
  "Taurine",
  "Collagen",
  "Selenium",
  "Glucosamine & Chondroitin",
  "MSM",
  "Boswellia Serrata",
  "Devil's Claw",
  "Folic Acid",
  "REM Repair",
  "Maca",
  "Pine Pollen",
  "Zinc",
  "Stinging Nettle",
  // --- new: herbs from the Guide's "Alphabetical Summary of Herbs &
  // Supplements" that name a symptom not covered by any existing remedy
  // [Guide] ---
  "Goldenseal",
  "Celery Seeds",
  "Sarsaparilla",
  "Lutein / Zeaxanthin",
  "Boneset",
  "Echinacea Angustifolia",
  "Bromelain",
  "Olive Leaf",
  "Barberry",
  "Acetyl-L-Carnitine (ALCAR)",
  "Chlorophyll",
  // --- new: herbs added from the Napiers CLAID Herbal Protocol letter [Napiers] ---
  "Black Walnut",
  "Reishi",
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
    "Headache": -1, // [Babesia Protocol / Bartonella Protocol] "when you feel a headache, reduce the dose or discontinue this herb"
    "Bacterial neurotoxin burden": 3, // [Guide] preferred choice if also treating Bartonella/Babesia or with active tremors/electric-shock sensations
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
    "Circulatory issues": 3, // [Guide] "powerfully stimulates microcirculation, specifically driving blood flow into the joints, heart, eyes, brain, and skin"
    "Skin issues": 2, // [Guide] "eases joint and skin manifestations"
  },
  "Cat's Claw": {
    "Joint pain": 3,
    "Brain fog": 1,
    "Fatigue": 1,
    "Insomnia": -1,
    "Cardiac issues": -1, // [Lyme (Borrelia) Protocol] "Exercise caution in taking this herb if you have low blood pressure"
  },
  "Bidens Pilosa": {
    "Body tremors": 1,
    "Night sweats": 1,
    "Joint pain": 1,
    "Fatigue": 2,
    "Urinary tract issues": 3, // [Guide] "highly effective for recurrent urinary tract infections or systemic mucosal inflammation"
    "Respiratory issues": 2, // [Guide] "also used for lung infections"
    "Sore throat": 2, // [Napiers] "respiratory passages, sore throat, difficulty swallowing"
    "Heart palpitations": 1, // [Napiers] "TCM/Eclectic use in cardiac spasm, palpitations"
    "Cardiac issues": 1, // [Napiers] "cardiac spasm, palpitations"
    "Candida / Fungal overgrowth": 1, // [Napiers] "broad-spectrum use including babesia, mycoplasma (SHB), cytomegalovirus (CMV), candida and herpes"
  },
  "Artemisia": {
    "Heart palpitations": -1,
    "Night sweats": 2,
    "Brain fog": 1,
    "Fatigue": -1,
    "Insomnia": -1,
    "Headache": 1,
    "Cardiac issues": -1, // added so the existing CONTRAINDICATIONS dampen rule below actually has a weight to act on
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
    "Brain fog": 1, // [Guide] Brain Fog baseline set
    "Numbness / Neuropathy": 2, // [Guide] Muscle Twitching/Numbness baseline set
    "Cardiac issues": 1, // [Guide] Cardiac Problems set — "stabilize heart rhythm and reduce rapid pulses"
  },

  // --- new remedies ---
  "Salvia Miltiorrhiza": {
    "Brain fog": 2, // [Guide] "protection for the Golgi apparatus of nerve cells"
    "Edema / Swelling": 2, // [Guide] Edema/lymph set
    "Numbness / Neuropathy": 1,
    "Cardiac issues": 1,
    "Neurogenic pain": 2, // [Guide] Buhner combination with Angelica sinensis
  },
  "Alchornea Cordifolia": {
    "Fatigue": 1,
    "Numbness / Neuropathy": 1, // protects erythrocytes, relevant to Babesia/Bartonella
    "Headache": 2, // [Napiers] "pain relief for headache, backache, whole body pain"
    "Joint pain": 2, // [Napiers] "backache, whole body pain" mapped to the joint/musculoskeletal-pain category
    "Depression": 2, // [Napiers] "Improves low mood and anxiety"
    "Anxiety / Restlessness": 2, // [Napiers] "Improves low mood and anxiety"
    "Fever": 2, // [Napiers] "Reduces fevers"
    "Anemia": 2, // [Napiers] "Helpful in anaemia (including sickle cell), improves iron uptake"
    "Respiratory issues": 1, // [Napiers] "supports the respiratory and genito-urinary systems"
    "Urinary tract issues": 1, // [Napiers] "supports the respiratory and genito-urinary systems"
  },
  "Ashwagandha": {
    "Insomnia": 2, // [Planner] Sleep problems list
    "Depression": 1, // [Guide] depression set
    "Brain fog": 1,
    "Fatigue": 1,
    "Anxiety / Restlessness": 1,
    "Neurological": 1, // [Guide] "multi-directional support for the nervous system"
  },
  "Licorice": {
    "Fatigue": 1,
  },
  "Milk Thistle": {
    "Fatigue": 1,
    "Gastrointestinal problems": 1, // liver-support, indirectly digestive
    "Headache": 2, // [Napiers] "Lyme headaches to front of head"
    "Herx reaction": 2, // [Napiers] "Liver, kidney and spleen protections, detox"
    "Respiratory issues": 1, // [Napiers] "Anti-inflammatory action in tissue, lungs (used to treat respiratory allergy)"
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
    "Circulatory issues": 1, // [Guide] "helps prevent atherosclerosis, lowers blood pressure, reduces cardiovascular risks"
  },
  "Hawthorn": {
    "Cardiac issues": 3, // [Guide] core cardiac herb
    "Heart palpitations": 2,
  },
  "L-Arginine": {
    "Reduced libido": 2,
    "Fatigue": 2, // [Guide] Chronic Fatigue set — Buhner/Horowitz mitochondrial stack
    "Cardiac issues": -1, // added so the existing CONTRAINDICATIONS dampen rule below actually has a weight to act on
  },
  "Cordyceps": {
    "Fatigue": 2,
    "Reduced libido": 1,
    "Brain fog": 1,
    "Cardiac issues": 1,
  },
  "Isatis": {
    "Fatigue": 1,
    "Headache": 2, // [Napiers] "Reduces encephalitis swelling, CNS inflammation, meningitis, headaches, eye complications"
    "Neurological": 3, // [Napiers] "Reduces encephalitis swelling, CNS inflammation, meningitis"
    "Eye problems": 1, // [Napiers] "eye complications"
    "Sore throat": 1, // [Napiers] "Mycoplasma onset: maculopapular rashes, sore throat, laryngitis, tonsillitis"
    "Respiratory issues": 1, // [Napiers] "lung anti-inflammatory reduces airway swelling"
  },
  "Red Root": {
    "Edema / Swelling": 3, // [Guide] "Test both Cleavers and Red Root to see which works best for your body"
  },
  "Rhodiola Rosea": {
    "Fatigue": 2,
    "Brain fog": 2, // [Guide] "an excellent adaptogen for brain fog, fatigue, and severe stress"
    "Depression": 1,
    "Insomnia": -1, // [Guide] "do not take close to bedtime" — some experience jitters
  },
  "Astragalus": {
    "Fatigue": 1,
  },
  "Cleavers": {
    "Edema / Swelling": 3, // [Guide] core lymph/edema herb
    "Urinary tract issues": 2, // [Guide] "diuretic benefits for urinary tract inflammation"
  },
  "Gotu Kola": {
    "Brain fog": 3, // [Guide] "Excellent herbs to begin with include Gotu Kola or Ginkgo biloba"
    "Edema / Swelling": 1,
    "Depression": 1,
    "Circulatory issues": 3, // [Guide] "maintains structural elasticity in venous walls and capillaries while supporting the entire circulatory system"
  },
  "Ginkgo Biloba": {
    "Brain fog": 3, // [Guide] "Excellent herbs to begin with include Gotu Kola or Ginkgo biloba"
    "Numbness / Neuropathy": 3, // [Guide] "the ideal choice" for numbness driven by peripheral circulatory restriction/cold extremities
    "Headache": 1,
    "Cardiac issues": 1,
    "Circulatory issues": 3, // [Guide] "enhances structural blood vessel function... improving blood flow to the brain and skeletal muscles"
  },
  "Teasel Root": {
    "Joint pain": 3, // [Guide] "begin by introducing Wild Teasel tincture" — Joint Problems baseline herb
  },
  "Motherwort": {
    "Anxiety / Restlessness": 2,
    "Cardiac issues": 2, // [Guide] Cardiac Problems set — best if palpitations are driven by nervous tension
    "Heart palpitations": 2,
    "Depression": 2, // [Guide] Depression set — recommended if migraines are present and deep calming is needed
    "Insomnia": 1,
  },
  "Stephania": {
    "Cardiac issues": 2, // [Guide] Cardiac Problems set — best if cardiac issues co-occur with neurological/eye symptoms
    "Numbness / Neuropathy": 1,
    "Eye problems": 2, // [Guide] "delivers the best results" for ocular Lyme/Bell's Palsy
    "Joint pain": 1,
    "Bell's Palsy": 3, // [Guide] "delivers the best results, as explicitly recommended by Buhner"
  },
  "Gou Teng": {
    "Brain fog": 2, // [Guide] baseline neuroborreliosis herb alongside Tryptophan
    "Anxiety / Restlessness": 2,
    "Numbness / Neuropathy": 1,
    "Cardiac issues": -1, // [Guide] "lowers blood pressure — hypotensive tendencies should monitor or swap"
    "Neurological": 3, // [Guide] baseline herb alongside Tryptophan
  },
  "Tryptophan": {
    "Depression": 3, // [Guide] primary depression herb, along with 5-HTP and SAMe
    "Insomnia": 2,
    "Anxiety / Restlessness": 1,
    "Neurological": 3, // [Guide] baseline herb alongside Gou teng
  },
  "Valerian (Amantilla)": {
    "Insomnia": 3,
    "Anxiety / Restlessness": 1,
  },
  "NAC": {
    "Brain fog": 1,
    "Fatigue": 2, // [Guide] Chronic Fatigue set — Rawls mitochondrial-protection stack
    "Herx reaction": 2, // [Guide] Herx/detox set
    "Neurological": 1, // [Guide] baseline support alongside Gou teng/Tryptophan
    "Bacterial neurotoxin burden": 1, // [Guide] neurotoxin removal set
    "Respiratory issues": 2, // [Guide] "powerful mucolytic properties — liquefying and reducing mucus viscosity to clear the respiratory tract"
  },
  "Melatonin": {
    "Insomnia": 3,
    "Depression": 2, // [Guide] Depression set — recommended if sleep is disrupted
  },

  // --- new: remedies pulled in via the Guide's "Proposals for Selecting
  // Herb Sets" section [Guide] ---
  "Glutathione": {
    "Brain fog": 1,
    "Herx reaction": 1,
    "Fatigue": 2, // [Guide] Chronic Fatigue set — Rawls mitochondrial-protection stack
    "Neurological": 1, // [Guide] baseline support alongside Gou teng/Tryptophan
    "Bacterial neurotoxin burden": 1, // [Guide] neurotoxin removal set
  },
  "Rg3 Nasal Spray": {
    "Brain fog": 2, // [Guide] neuro-inflammation / neurodegenerative decline
    "Neurological": 2, // [Guide] fallback if Gou teng/Tryptophan baseline is insufficient
  },
  "Lion's Mane": {
    "Brain fog": 2, // [Guide] "resolves brain fog while repairing neurological structures" — dual-purpose with Chronic Fatigue/Brain Fog set
    "Gastrointestinal problems": 1,
    "Demyelination": 3, // [Guide] "Buhner strongly recommends Lion's Mane... to resolve cognitive defects and rebuild damaged neuronal networks" — milder/chronic maintenance; start with Chinese Senega, transition to Lion's Mane
  },
  "Chinese Senega": {
    "Brain fog": 1,
    "Depression": 1,
    "Demyelination": 3, // [Guide] preferred for acute, severe flare-ups
    "Respiratory issues": 2, // [Guide] "applied in respiratory tract inflammations, pneumonia, and asthma"
  },
  "BDNF Essentials": {
    "Brain fog": 1,
    "Demyelination": 2, // [Guide] fallback if Chinese Senega/Lion's Mane don't deliver noticeable improvement
  },
  "Kudzu": {
    "Headache": 2, // [Guide] "pressure" in the head / neurogenic pain
    "Numbness / Neuropathy": 1,
    "Neurogenic pain": 3, // [Guide] first-line pairing with Greater Celandine
    "Bell's Palsy": 2, // [Guide] "amplified by adding Kudzu" alongside Stephania
    "Circulatory issues": 2, // [Guide] puerarin is "anti-arrhythmic, circulatory-supporting, and anti-diabetic"
  },
  "Vitamin B12": {
    "Numbness / Neuropathy": 2, // [Guide] Muscle Twitching/Numbness baseline set, alongside Magnesium and Folic Acid
    "Bell's Palsy": 1, // [Guide] "High-dose Vitamin B12 supplementation is also highly indicated"
  },
  "Greater Celandine": {
    "Headache": 2, // [Guide] neurogenic pain set
    "Numbness / Neuropathy": 1,
    "Neurogenic pain": 3, // [Guide] first-line pairing with Kudzu
  },
  "PEA": {
    "Numbness / Neuropathy": 2, // [Guide] "one of the most effective natural options for reducing stubborn neuropathic pain"
    "Insomnia": 2, // [Guide] Sleep Problems set, paired with REM Repair for GABA-driven calming
    "Neurogenic pain": 2, // [Guide] fallback if Greater Celandine + Kudzu is insufficient
  },
  "CBD Oil": {
    "Numbness / Neuropathy": 2,
    "Headache": 2,
    "Neurogenic pain": 2, // [Guide] "excellent results due to its analgesic properties"
  },
  "Angelica Sinensis": {
    "Headache": 1,
    "Herx reaction": 1, // [Guide] "help lower levels of Lyme neurotoxins"
    "Gastrointestinal problems": -1, // [Guide] "may occasionally cause mild diarrhea"
    "Neurogenic pain": 2, // [Guide] Buhner combination with Salvia miltiorrhiza
    "Bacterial neurotoxin burden": 3, // [Guide] one of three interchangeable options for neurotoxin removal
    "Respiratory issues": 1, // [Guide] "also recommended for nervous tension, insomnia, and respiratory issues"
  },
  "Mucuna Pruriens": {
    "Body tremors": 2, // [Guide] "natural L-dopa precursor" for tremors, per Buhner
  },
  "SAMe": {
    "Body tremors": 2, // [Guide] "highly effective for this ailment"
    "Depression": 3, // [Guide] primary depression herb, along with Tryptophan and 5-HTP
    "Joint pain": 1,
    "Brain fog": 1,
  },
  "Burbur-Pinella": {
    "Herx reaction": 3, // [Guide] "exceptional ability to diminish intense Herx reactions"
    "Brain fog": 1,
    "Bacterial neurotoxin burden": 3, // [Guide] "exceptionally effective choice for neural detoxification and should be considered a staple"
  },
  "5-HTP": {
    "Depression": 3, // [Guide] primary depression herb, along with Tryptophan and SAMe — never combine with Tryptophan
  },
  "Siberian Ginseng": {
    "Fatigue": 3, // [Guide] "For many, a high-purity Siberian Ginseng tincture (2:1) provides excellent relief" — the Chronic Fatigue baseline
    "Depression": 2, // [Guide] Depression set — add if depression is accompanied by severe exhaustion
    "Brain fog": 1,
  },
  "ATP Fuel": {
    "Fatigue": 3, // [Guide] "using either ATP Fuel or ATP 360 alone provides excellent relief and stands as the most effective solution for chronic fatigue"
    "Brain fog": 1,
  },
  "ATP 360": {
    "Fatigue": 3, // [Guide] "using either ATP Fuel or ATP 360 alone provides excellent relief and stands as the most effective solution for chronic fatigue"
  },
  "NT Factor Energy": {
    "Fatigue": 2, // [Guide] Chronic Fatigue set — combine with ATP Fuel/ATP 360 for the manufacturer's full mitochondrial-restoration trio
  },
  "D-Ribose": {
    "Fatigue": 2, // [Guide] Buhner/Horowitz mitochondrial stack
  },
  "NADH": {
    "Fatigue": 2, // [Guide] Buhner/Horowitz mitochondrial stack
  },
  "L-Carnitine": {
    "Fatigue": 2, // [Guide] Buhner/Horowitz mitochondrial stack
    "Cardiac issues": 2, // [Guide] Cardiac Problems set — cardiac ischemia rapidly depletes tissue levels
  },
  "Alpha Lipoic Acid": {
    "Fatigue": 2, // [Guide] Buhner/Horowitz/Rawls mitochondrial stacks
  },
  "Adrenal Cortex": {
    "Fatigue": 2, // [Guide] adrenal burnout set
  },
  "Energy Multi-Plex": {
    "Fatigue": 2, // [Guide] vegan adrenal-support alternative to Adrenal Cortex
  },
  "Taurine": {
    "Cardiac issues": 2, // [Guide] Cardiac Problems set — most abundant amino acid in the heart, mandatory for proper cardiac muscle function
    "Body tremors": 1,
    "Brain fog": 1, // [Guide] Brain Fog baseline set
    "Tinnitus / Hearing issues": 3, // [Guide] "can also significantly improve or eliminate tinnitus... and hearing decline by restoring correct calcium ion flux within auditory cells"
  },
  "Collagen": {
    "Joint pain": 2, // [Guide] Joint Problems baseline set
  },
  "Selenium": {
    "Joint pain": 2, // [Guide] Joint Problems baseline set
  },
  "Glucosamine & Chondroitin": {
    "Joint pain": 2,
  },
  "MSM": {
    "Joint pain": 2,
  },
  "Boswellia Serrata": {
    "Joint pain": 2, // [Guide] fallback if Teasel Root proves insufficient
  },
  "Devil's Claw": {
    "Joint pain": 2, // [Guide] fallback if Teasel Root proves insufficient
  },
  "Folic Acid": {
    "Numbness / Neuropathy": 2, // [Guide] Muscle Twitching/Numbness baseline set, alongside Magnesium and Vitamin B12
    "Depression": 1,
    "Anemia": 2, // [Guide] "required for hematopoiesis; deficiencies lead to anemia"
  },
  "REM Repair": {
    "Insomnia": 3, // [Guide] GABA + Melissa + Valerian + B6 blend (Nutrined) — one of the Guide's three Sleep Problems paths
  },
  "Maca": {
    "Reduced libido": 3, // [Guide] "We recommend starting with a combination of Maca root and Pine Pollen"
    "Fatigue": 1,
  },
  "Pine Pollen": {
    "Reduced libido": 3, // [Guide] "We recommend starting with a combination of Maca root and Pine Pollen"
    "Fatigue": 1,
  },
  "Zinc": {
    "Reduced libido": 1,
  },
  "Stinging Nettle": {
    "Edema / Swelling": 2, // [Guide] "drinking a daily infusion... acts as a safe diuretic"
  },

  // --- new: remedies surfaced from the Guide's "Alphabetical Summary of
  // Herbs & Supplements" that named a symptom not covered by any existing
  // remedy [Guide] ---
  "Goldenseal": {
    "Respiratory issues": 2, // [Guide] "helpful for upper respiratory catarrh due to its expectorant properties"
    "Candida / Fungal overgrowth": 2, // [Guide] "effectively eliminates Candida overgrowth without damaging beneficial gut flora"
  },
  "Celery Seeds": {
    "Urinary tract issues": 2, // [Guide] "acts as an effective, safe diuretic to clear acidic urinary tract sediment"
    "Joint pain": 1, // [Guide] "minimizes inflammation of the joint capsule... easing arthritis symptoms"
  },
  "Sarsaparilla": {
    "Skin issues": 3, // [Guide] "resolving Lyme-related skin issues"
    "Herx reaction": 3, // [Guide] "powerfully diminishes the severity of Herxheimer reactions"
    "Joint pain": 1, // [Guide] "calms inflammatory joint flare-ups"
    "Brain fog": 1, // [Guide] "crosses the blood-brain barrier to reduce cognitive deficits"
  },
  "Lutein / Zeaxanthin": {
    "Eye problems": 3, // [Guide] "safeguard ocular tissue from harmful UV radiation... preserving sharp central vision"
    "Skin issues": 1, // [Guide] "improving cutaneous elasticity, hydration, sebum regulation"
  },
  "Boneset": {
    "Fever": 3, // [Guide] "used primarily to reduce fevers"
  },
  "Echinacea Angustifolia": {
    "Sore throat": 3, // [Guide] "superb for throat infections and tonsillitis"
    "Wound healing": 2, // [Guide] topical tincture "can be used topically to accelerate wound healing"
  },
  "Bromelain": {
    "Joint pain": 2, // [Guide] "excellent daily supplement for individuals suffering from acute or chronic joint pain, swelling"
    "Wound healing": 2, // [Guide] "accelerating wound healing"
  },
  "Olive Leaf": {
    "Candida / Fungal overgrowth": 3, // [Guide] "a staple for systemic candidiasis"
    "Circulatory issues": 2, // [Guide] "enhances arterial elasticity to improve blood flow and lower high blood pressure"
  },
  "Barberry": {
    "Candida / Fungal overgrowth": 2, // [Guide] "demonstrates strong action against Candida yeasts"
    "Gastrointestinal problems": 2, // [Napiers] "Bitter tonic and cholagogue, stimulates bile flow and liver function. Used for gallstones, gallbladder problems... Mildly laxative"
    "Cardiac issues": 1, // [Napiers] "Regulates heart, increases blood platelets"
  },
  "Acetyl-L-Carnitine (ALCAR)": {
    "Motor coordination / balance": 3, // [Guide] "improve cognitive processing, mood, motor coordination, and stress resilience"
    "Brain fog": 2, // [Guide] "strong neuroprotective mechanisms, shielding brain cells from degradation"
    "Fatigue": 1, // [Guide] "transporting long-chain fatty acids straight into mitochondria for energy conversion"
  },
  "Chlorophyll": {
    "Circulatory issues": 1, // [Guide] "stimulates healthy blood production and supports the cardiovascular system"
    "Gastrointestinal problems": 1, // [Guide] "helps rebuild damaged gut flora to improve digestion"
  },

  // --- new: remedies from the Napiers CLAID Herbal Protocol letter [Napiers] ---
  "Black Walnut": {
    "Respiratory issues": 2, // [Napiers] "helpful with sinus issues"
    "Candida / Fungal overgrowth": 2, // [Napiers] "Also active against molds, parasites" — molds mapped to the fungal-overgrowth category
  },
  "Reishi": {
    "Fatigue": 3, // [Napiers] "Adaptogen, increases stress resilience, rejuvenative, used in chronic fatigue, fibromyalgia and post-viral syndromes"
    "Cardiac issues": 1, // [Napiers] "balances stress hormones, heart/brain function"
    "Brain fog": 1, // [Napiers] "heart/brain function"
    "Circulatory issues": 2, // [Napiers] "Increases circulatory/venous oxygen"
    "Gastrointestinal problems": 1, // [Napiers] "Nourishing, strengthening, [gut] antimicrobial tonic"
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
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
  },
  "Cryptolepis": {
    "description":
      "An African-origin herb often used for its broad antimicrobial action, particularly associated with addressing night sweats and general systemic support.",
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
  },
  "Japanese Knotweed": {
    "description":
      "Contains resveratrol and is often used for joint support and circulatory benefits, alongside general anti-inflammatory use.",
    "caution":
      "Do not combine with blood-thinning medications; stop 10 days before surgery. [Guide]",
    "tinctureDosage": {
      "1:5": "1.25 - 5 ml x 3-6 daily", // [Planner]
      "1:3": "0.75 - 3 ml x 3-6 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 2 ml x 3-6 daily", // [Planner]
    },
  },
  "Cat's Claw": {
    "description":
      "A South American vine traditionally used for joint and immune support, with anti-inflammatory properties. In Lyme protocols it is also used to help maintain CD57+ T-cell counts.",
    "caution":
      "Contraindicated with blood thinners; stop 10 days before surgery; cannot be used with stomach acid blockers (PPIs), which prevent conversion to its active form. [Guide]",
    "tinctureDosage": {
      "1:5": "1.25 - 5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 3 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 2 ml x 3 daily", // [Planner]
    },
  },
  "Bidens Pilosa": {
    "description":
      "A flowering plant used traditionally for general immune and inflammatory support, often included in broader symptom-relief protocols.",
    "tinctureDosage": {
      "1:5": "7.5 ml x 3 daily", // [Planner]
      "1:3": "4.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "3 ml x 3 daily", // [Planner]
    },
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
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
  },
  "Chinese Skullcap": {
    "description":
      "An herb used traditionally for calming and anti-inflammatory effects, often associated with cognitive and sleep-related support.",
    "caution":
      "Can alter insulin/blood sugar levels (caution for type 1 diabetics) and may interact with blood-pressure-lowering medications. [Guide]",
    "tinctureDosage": {
      "1:5": "2.5 ml x 3 daily", // [Planner]
      "1:3": "1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "1 ml x 3 daily", // [Planner]
    },
  },
  "Houttuynia": {
    "description":
      "An herb used traditionally for antimicrobial and immune-supportive purposes, prominent in Bartonella and Mycoplasma protocols.",
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3-6 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3-6 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3-6 daily", // [Planner]
    },
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
    "tinctureDosage": {
      "1:5": "2.5 ml x 3 daily", // [Planner]
      "1:3": "1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "1 ml x 3 daily", // [Planner]
    },
  },
  "Alchornea Cordifolia": {
    "description":
      "A systemic herb concentrating in the bloodstream; used against Babesia and Bartonella, also effective vs. Candida and resistant bacteria. Protects red blood cells. [Guide]",
    "caution":
      "High doses can sedate the CNS — should not be combined with large doses of antidepressants or sedatives. [Guide] Relevant if taking duloxetine or mirtazapine — flag for prescriber review.",
    "tinctureDosage": {
      "1:5": "1.25 ml x 3 daily", // [Planner]
      "1:3": "0.75 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 ml x 3 daily", // [Planner]
    },
  },
  "Ashwagandha": {
    "description":
      "Lowers IL-10 cytokine levels, shifts Th2 immune responses, and acts as a mood stabilizer and sleep aid across nearly every co-infection protocol. [Guide]",
    "caution":
      "Should never be combined with pharmaceutical sedatives or anti-anxiety medications. May cause mild digestive upset in rare cases. [Guide] Relevant if taking duloxetine or mirtazapine — flag for prescriber review.",
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
  },
  "Licorice": {
    "description":
      "A powerful antiviral herb and exceptional synergist used in Babesia, Chlamydia, Ehrlichia and Yersinia protocols. Should be used in combination blends rather than as a standalone. [Guide]",
    "caution":
      "Completely contraindicated in hypertension, hypokalemia, hypernatremia, and low testosterone. Not for continuous use beyond 4–6 weeks. [Guide]",
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
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
    "tinctureDosage": {
      "1:5": "1.25 ml x 3 daily", // [Planner]
      "1:3": "0.75 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 ml x 3 daily", // [Planner]
    },
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
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
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
    "tinctureDosage": {
      "1:5": "1.25 - 5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 3 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 2 ml x 3 daily", // [Planner]
    },
  },
  "Isatis": {
    "description":
      "Used against Bartonella and Mycoplasma; a potent immune stimulant with anti-inflammatory action. [Guide]",
    "caution":
      "Never take for more than 3 consecutive weeks without a break — prolonged/high-dose use can overtax the kidneys. [Guide]",
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
  },
  "Red Root": {
    "description":
      "A powerful stimulant and tonic for the lymphatic system; tones mucosal linings and lowers liver/spleen inflammation. [Guide]",
    "caution":
      "A potent blood coagulant — never combine with pharmaceutical coagulants or anticoagulants. [Guide]",
    "tinctureDosage": {
      "1:5": "2.5 - 5 ml x 3-4 daily", // [Planner]
      "1:3": "1.5 - 3 ml x 3-4 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "1 - 2 ml x 3-4 daily", // [Planner]
    },
  },
  "Rhodiola Rosea": {
    "description":
      "An adaptogen used heavily for adrenal fatigue, chronic exhaustion and focus deficits, with anti-depressive benefits and mitochondrial protection. [Guide]",
    "caution":
      "Some people experience jitters/over-stimulation — avoid taking close to bedtime until tolerance is confirmed. [Guide]",
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3-4 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3-4 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3-4 daily", // [Planner]
    },
  },
  "Astragalus": {
    "description":
      "An immunostimulating herb that upregulates interferon-gamma/IL-2 and raises CD4 counts; recommended for pre-exposure and early-stage Lyme. [Guide]",
    "caution":
      "Contraindicated in late-stage chronic Lyme disease — stimulates already elevated Th1 immune pathways and can severely aggravate existing symptoms. Strictly for pre-exposure, early localized, and early disseminated stages only. [Guide] See ILLNESS_CONTRAINDICATIONS below.",
    "tinctureDosage": {
      "1:5": "2.5 - 5 ml x 3-4 daily", // [Planner]
      "1:3": "1.5 - 3 ml x 3-4 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "1.0 - 2 ml x 3-4 daily", // [Planner]
    },
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
    "tinctureDosage": {
      "1:5": "1 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.5 - 1.5 ml x 3 daily (lower bound: raw 0.6, rounded to match source's rounding pattern)", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
  },
  "Stephania": {
    "description":
      "Primary Buhner herb for ocular Lyme and Bell's Palsy; reduces neuro-inflammation and calms autoimmune joint flare-ups. Acts as a calcium channel blocker. [Guide]",
    "caution":
      "Roughly half of patients on pharmaceutical calcium channel blockers experience problems combining them with Stephania — consult a physician. Completely contraindicated with AV heart block and must never be combined with anti-arrhythmic drugs or digoxin. [Guide]",
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
  },
  "Gou Teng": {
    "description":
      "Baseline neuroborreliosis herb (with Tryptophan) per Buhner's core recommendations; addresses neuro-inflammation with anti-epileptic properties. [Guide]",
    "caution":
      "Lowers blood pressure — those with hypotensive tendencies should monitor status or swap for an alternative. [Guide]",
    "tinctureDosage": {
      "1:5": "2.5 - 5 ml x 3-6 daily", // [Planner]
      "1:3": "1.5 - 3 ml x 3-6 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "1 - 2 ml x 3-6 daily", // [Planner]
    },
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

  // --- new: remedies pulled in via the Guide's "Proposals for Selecting
  // Herb Sets" section [Guide] ---
  "Glutathione": {
    "description":
      "Master antioxidant and the body's primary cellular shield against free radicals and metabolic toxins; renders lipophilic toxins water-soluble for excretion and dictates white blood cell production. [Guide]",
  },
  "Rg3 Nasal Spray": {
    "description":
      "A Nutrined nasal spray formulated to resolve microglial activation during chronic neuro-inflammation, adrenal exhaustion, and neurodegenerative decline. [Guide]",
  },
  "Lion's Mane": {
    "description":
      "A medicinal mushroom that protects, develops, and regenerates the nervous system; stimulates Nerve Growth Factor (NGF) and accelerates myelination. Buhner recommends it for milder/chronic neurological maintenance. Also excellent for GI tract disorders. [Guide]",
    "tinctureDosage":
      "1:5 dosage not given in source [Planner]. 1:2 = 1.25 - 2.5 ml x 3-6 daily. 1:3 cannot be reliably calculated without the 1:5 baseline. [Planner]",
  },
  "Chinese Senega": {
    "description":
      "Stimulates Nerve Growth Factor (NGF), supporting neuronal proliferation, survival, and myelination. Buhner prefers this over Lion's Mane for acute, severe neurological flare-ups. [Guide]",
    "tinctureDosage": {
      "1:5": "1.5 ml x 3 daily", // [Planner]
      "1:3": "~0.9 ml x 3 daily (calculated; source rounds the 1:2 figure down to 0.5)", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 ml x 3 daily", // [Planner]
    },
  },
  "BDNF Essentials": {
    "description":
      "A Researched Nutritionals formula that stimulates Brain-Derived Neurotrophic Factor (BDNF), used as a fallback if Lion's Mane/Chinese Senega don't deliver noticeable improvement for demyelination. [Guide]",
  },
  "Kudzu": {
    "description":
      "Features the compound puerarin; anti-arrhythmic, circulatory-supporting, and anti-diabetic. Calms neuro-inflammation and mitigates a feeling of \"pressure\" in the brain or neurogenic pain. Used alongside Stephania for Bell's Palsy. [Guide]",
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
  },
  "Vitamin B12": {
    "description":
      "High-dose supplementation is specifically indicated for Bell's Palsy alongside Stephania and Kudzu. [Guide]",
  },
  "Greater Celandine": {
    "description":
      "Its active alkaloid, chelidonine, acts similarly to (but much milder than) morphine on the CNS, useful for neurogenic pain and emotional hyperexcitability. [Guide]",
    "caution":
      "Increases bile flow — contraindicated in bile duct obstruction or active liver disease. Must not be combined with other drugs, especially paracetamol, and should never be used continuously for longer than one month without a 1-2 week break. [Guide]",
  },
  "PEA": {
    "description":
      "N-palmitoylethanolamide (Nutrined); regulates mast cell and microglial activation and is considered one of the most effective natural options for neuropathic pain. Also supplied in REM Repair for sleep. [Guide]",
  },
  "CBD Oil": {
    "description":
      "Non-psychoactive hemp extract with neuroactive and neuroprotective benefits; an extraordinary analgesic for chronic pain and neuro-inflammation. A high concentration is needed for meaningful relief. [Guide]",
    "caution":
      "Contraindicated in coronary artery disease and severe blood coagulation deficits. [Guide]",
  },
  "Angelica Sinensis": {
    "description":
      "Contains coumarin compounds that dilate blood vessels and improve blood flow; used to help lower Lyme neurotoxin levels (e.g. quinolinic acid) and, combined with Salvia miltiorrhiza, for neurogenic pain. [Guide]",
    "caution":
      "May occasionally cause mild diarrhea. [Guide]",
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
  },
  "Mucuna Pruriens": {
    "description":
      "A natural L-dopa precursor; Buhner's recommended addition for persistent tremors alongside Sida acuta. [Guide]",
  },
  "SAMe": {
    "description":
      "The primary methyl-group donor in cellular one-carbon metabolism; enhances mood, alleviates chronic joint pain, and is highly effective for tremors. Bypasses transmethylation blocks linked to depression. [Guide]",
  },
  "Burbur-Pinella": {
    "description":
      "A Nutramedix combination of Burbur (Desmodium molliculum) and Pinella (Pimpinella anisum); supports deep detox of the brain and CNS, flushing toxic metabolites while cleansing the liver, kidneys, and lymph. Exceptionally effective for diminishing intense Herx reactions. [Guide]",
  },
  "5-HTP": {
    "description":
      "A direct precursor to serotonin; stabilizes mood swings and counters depression, especially with chronic tryptophan deficiency. Pairs well with green tea extract. [Guide]",
    "caution":
      "Never use together with Tryptophan — both regulate the same pathway; if one doesn't work, swap to the other rather than combining. [Guide]",
  },
  "Siberian Ginseng": {
    "description":
      "A premier adaptogen distinct from Korean Ginseng; rapidly increases physical energy and stamina, balances the HPA axis, and stimulates serotonin/dopamine release. First-line recommendation (as a 2:1 tincture) for chronic fatigue, and useful for severe exhaustion-driven depression. [Guide]",
    "caution":
      "Unlike Korean Ginseng, raises rather than lowers blood pressure — those with high blood pressure must monitor status closely. [Guide]",
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
  },
  "ATP Fuel": {
    "description":
      "A Researched Nutritionals mitochondrial formula with a patented phospholipid matrix that repairs mitochondrial membranes and supports the Krebs cycle; addresses both chronic fatigue and brain fog. [Guide]",
  },
  "ATP 360": {
    "description":
      "A Researched Nutritionals formula supporting mitochondrial growth/mitosis, membrane integrity, and cellular energy production; effective alone for chronic fatigue. [Guide]",
  },
  "NT Factor Energy": {
    "description":
      "A Researched Nutritionals formula that repairs damaged mitochondrial membranes and supplies lipids for healthy ATP synthesis; part of the mitochondrial-restoration trio with ATP Fuel and ATP 360. [Guide]",
  },
  "D-Ribose": {
    "description":
      "Essential fuel for mitochondrial cellular energy generation; part of Buhner's and Horowitz's mitochondrial support stacks for chronic fatigue. [Guide]",
    "caution":
      "Must not be used by individuals with metabolic syndrome or diabetes with elevated glycation markers. [Guide]",
  },
  "NADH": {
    "description":
      "Coenzyme Q1; a core component of the electron transport chain required for mitochondrial ATP production. [Guide]",
  },
  "L-Carnitine": {
    "description":
      "Transports fatty acids into mitochondria for energy conversion; part of Buhner's and Horowitz's mitochondrial stacks, and indicated for cardiac issues since ischemia rapidly depletes tissue levels. [Guide]",
  },
  "Alpha Lipoic Acid": {
    "description":
      "A powerful antioxidant coenzyme in fatty-acid oxidative pathways; helps maintain glutathione and CoQ10 levels and recycles Vitamins C and E. Part of Buhner's, Horowitz's, and Rawls' mitochondrial-support stacks. [Guide]",
    "caution":
      "A powerful mercury chelator that crosses the blood-brain barrier and can pull mercury into the brain — must never be used by those with chronic mercury poisoning or current/prior silver amalgam fillings without proper prior detox. [Guide]",
  },
  "Adrenal Cortex": {
    "description":
      "A bovine adrenal cortex glandular extract; supports adrenal function and cortisol regulation for adrenal-burnout-driven exhaustion. [Guide]",
  },
  "Energy Multi-Plex": {
    "description":
      "A Researched Nutritionals vegan, non-glandular blend of 14 nutrients supporting adrenal mechanics without risking over-stimulation or burnout — the non-glandular alternative to Adrenal Cortex. [Guide]",
  },
  "Taurine": {
    "description":
      "The second most abundant amino acid in muscle tissue; regulates excitable brain tissue (helping tremor/seizure-like activity), aids liver health, and is mandatory for proper cardiac muscle function. Can also improve tinnitus. [Guide]",
    "caution":
      "Do not combine with psychotropic medications; avoid if you have Bipolar Disorder. [Guide]",
  },
  "Collagen": {
    "description":
      "Structural protein recommended as part of the baseline joint-support set alongside Selenium, Glucosamine/Chondroitin, MSM, and Curcumin. [Guide]",
  },
  "Selenium": {
    "description":
      "Baseline mineral in the Guide's joint-support set. [Guide]",
  },
  "Glucosamine & Chondroitin": {
    "description":
      "Builds proteoglycans (the foundation of joint cartilage), helping strengthen and rebuild damaged joint structures and downregulate cartilage-breakdown enzymes; combining the two is specifically recommended. [Guide]",
  },
  "MSM": {
    "description":
      "Organic sulfur required for enzymes, collagen, keratin, and connective tissue; stimulates collagen synthesis, reinforces joint strength, and optimizes synovial fluid quality. [Guide]",
  },
  "Boswellia Serrata": {
    "description":
      "Distinct anti-inflammatory effects in osteoarthritis and joint issues, with chronic spinal pain relief; suggested as a Teasel Root alternative if Teasel proves insufficient. [Guide]",
  },
  "Devil's Claw": {
    "description":
      "Potent anti-inflammatory, anti-rheumatic, and analgesic properties for severe joint/muscle pain and skeletal inflammation; suggested as a Teasel Root alternative. [Guide]",
  },
  "Folic Acid": {
    "description":
      "Vitamin B9; supports serotonin/dopamine/acetylcholine production and is part of the baseline stack (with Magnesium, B6, B12) for muscle twitching and numbness. Deficiency can drive depression and cognitive decline. [Guide]",
  },
  "REM Repair": {
    "description":
      "A Nutrined blend of GABA, Melissa officinalis (Lemon Balm), Valerian, and Vitamin B6, formulated as a reliable sedative and sleep aid. [Guide]",
  },
  "Maca": {
    "description":
      "An adaptogen that optimizes adrenal/thyroid function; safely increases physical energy, stamina, and libido in both men and women. Recommended as a first pairing with Pine Pollen for libido problems. [Guide]",
  },
  "Pine Pollen": {
    "description":
      "Dense in amino acids, vitamins, and trace minerals; naturally contains bio-identical androgens (testosterone, DHEA). Low DHEA manifests as fatigue, low immunity, low libido, depression, and cognitive decline. [Guide]",
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
  },
  "Zinc": {
    "description":
      "Mineral included in the Guide's targeted libido-support stack alongside L-Arginine, L-Choline, L-Phenylalanine, and L-Tyrosine. [Guide]",
  },
  "Stinging Nettle": {
    "description":
      "Safe diuretic that reduces edema and removes stagnant fluid; also displays anti-inflammatory action that benefits arthritis and explicitly inhibits elastase (which degrades elastin, cartilage, and collagen). [Guide]",
    "caution":
      "Contraindicated for women with reproductive conditions (uterine cancers, fibroids, cysts, abnormal bleeding), chronic kidney disease, major surgical windows, or poorly managed diabetes. [Guide]",
  },

  // --- new: remedies surfaced from the Guide's "Alphabetical Summary of
  // Herbs & Supplements" that named a symptom not covered by any existing
  // remedy [Guide] ---
  "Goldenseal": {
    "description":
      "A rich natural source of berberine and one of the finest natural broad-spectrum antibiotics; healing/toning effect on mucous membranes, effective against Chlamydia pneumoniae, eliminates Candida overgrowth without damaging beneficial gut flora, and helps upper respiratory catarrh via its expectorant properties. [Guide]",
    "caution":
      "Contraindicated in high blood pressure, hypoglycemia, enzymatic insufficiency, and systemic autoimmune conditions such as Multiple Sclerosis or Lupus. [Guide]",
  },
  "Celery Seeds": {
    "description":
      "Rich in apigenin, a natural analgesic and uric-acid reducer; minimizes joint-capsule inflammation and neutralizes inflammatory metabolic acids, and acts as a safe diuretic to clear acidic urinary tract sediment. [Guide]",
  },
  "Sarsaparilla": {
    "description":
      "Binds bacterial endotoxins from dying spirochetes/co-infections, powerfully diminishing Herxheimer reactions; purifies the blood, calms inflammatory joint flare-ups, crosses the blood-brain barrier to reduce cognitive deficits, and resolves Lyme-related skin issues. [Guide]",
  },
  "Lutein / Zeaxanthin": {
    "description":
      "Accumulates in the eye lens and retina, filtering high-energy blue light and protecting the macula from UV/free-radical damage; also accumulates in skin, improving elasticity, hydration, and sebum regulation, with added cardiovascular support. [Guide]",
  },
  "Boneset": {
    "description":
      "A supportive agent for sporadic viral infections with intermittent (hot/cold) fevers — used primarily to reduce fevers, not as a core baseline therapy. [Guide]",
    "caution":
      "Can induce vomiting in excessive quantities — nausea while drinking the tea is a clear sign the dose is too high and must be reduced immediately. [Guide]",
    "tinctureDosage": {
      "1:5": "1.25 - 2.5 ml x 3 daily", // [Planner]
      "1:3": "0.75 - 1.5 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "0.5 - 1 ml x 3 daily", // [Planner]
    },
  },
  "Echinacea Angustifolia": {
    "description":
      "Distinct from common Echinacea purpurea; protects and repairs collagen structures, is a powerful pain reliever with antimicrobial/antiviral action, is superb for throat infections and tonsillitis, and (diluted, topically) accelerates wound healing. [Guide]",
    "caution":
      "Use caution with co-existing autoimmune conditions, as it is a potent immune stimulant. [Guide]",
    "tinctureDosage": {
      "1:5": "5 ml x 3 daily", // [Planner]
      "1:3": "3 ml x 3 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "2 ml x 3 daily", // [Planner]
    },
  },
  "Bromelain": {
    "description":
      "A proteolytic enzyme from pineapple that suppresses pain/inflammation compounds while stimulating anti-inflammatory prostaglandins — an excellent daily supplement for acute or chronic joint pain, swelling, and muscle trauma, and accelerates wound healing. [Guide]",
  },
  "Olive Leaf": {
    "description":
      "Exceptional antifungal properties, particularly against Candida albicans, making it a staple for systemic candidiasis; also delivers antibacterial/antiparasitic/antiviral action, regulates blood sugar, and enhances arterial elasticity to improve blood flow and lower blood pressure. [Guide]",
  },
  "Barberry": {
    "description":
      "Contains the potent alkaloid berberine, with an exceptionally wide antimicrobial spectrum (Chlamydia, E. coli, Streptococcus, Staphylococcus) and strong action against Candida yeasts; whole-plant extract is generally preferred over isolated berberine. [Guide]",
    "tinctureDosage": {
      "1:5": "2.5 ml x 3-6 daily", // [Planner]
      "1:3": "1.5 ml x 3-6 daily", // est. — calculated as 1:5 dose x 0.6 (dose scales with tincture ratio denominator; not stated in source)
      "1:2": "1 ml x 3-6 daily", // [Planner]
    },
  },
  "Acetyl-L-Carnitine (ALCAR)": {
    "description":
      "The acetylated form of L-Carnitine, superior for nervous/muscular system function; stimulates dopamine production to improve cognitive processing, mood, motor coordination, and stress resilience, transports fatty acids into mitochondria for energy, and provides strong neuroprotective mechanisms. [Guide]",
    "caution":
      "Must be strictly avoided by individuals with epilepsy. [Guide]",
  },
  "Chlorophyll": {
    "description":
      "A potent antioxidant that safeguards cells from free radicals and slows cellular aging; stimulates healthy blood production and supports the cardiovascular system, improves detoxification efficiency, bolsters immunity, and helps rebuild damaged gut flora. Its high magnesium content also soothes the nervous system. [Guide]",
  },

  // --- new: remedies from the Napiers CLAID Herbal Protocol letter [Napiers] ---
  "Black Walnut": {
    "description":
      "A core Borrelia antibiotic in vitro. Also active against molds and parasites, and helpful with sinus issues; supportive in underactive thyroid. [Napiers]",
  },
  "Reishi": {
    "description":
      "A medicinal mushroom (Ganoderma lucidum) and adaptogen from the Support Mix. Immunomodulating (TH1/TH2 balance), antihistamine, strongly anti-inflammatory, and balances stress hormones and heart/brain function. Increases stress resilience and circulatory/venous oxygen; used for chronic fatigue, fibromyalgia and post-viral syndromes. A nourishing gut-antimicrobial tonic that also inhibits viral replication and binding, including against HSV. [Napiers]",
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
        "Cardiac issues is treated as a hard contraindication for Sida Acuta, so it is not offered at all when that symptom is selected — regardless of how strongly other symptoms point toward it. Confirmed across all three infection protocols: \"if you have heart problems, it is better to avoid using this herb.\" [Babesia Protocol, Bartonella Protocol]",
    },
    "Headache": {
      "mode": "dampen",
      "factor": 0.5,
      "note":
        "Adjust dose to individual tolerance — reduce the dose or discontinue this herb if a headache occurs. [Babesia Protocol, Bartonella Protocol]",
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
  "Cat's Claw": {
    "Cardiac issues": {
      "mode": "dampen",
      "factor": 0.6,
      "note":
        "Exercise caution if you have low blood pressure. Also do not use with blood-thinning or immunosuppressive medications, and discontinue 10 days before surgery — not modeled here since those aren't tracked symptoms. [Lyme (Borrelia) Protocol]",
    },
  },
  "Gou Teng": {
    "Cardiac issues": {
      "mode": "dampen",
      "factor": 0.5,
      "note":
        "Lowers blood pressure — those with hypotensive tendencies should monitor status or swap for an alternative. [Guide]",
    },
  },
  "Stephania": {
    "Cardiac issues": {
      "mode": "exclude",
      "note":
        "Completely contraindicated with AV heart block and must never be combined with anti-arrhythmic drugs or digoxin; ~50% of patients on calcium channel blockers have issues combining them with Stephania [Guide]. The Bartonella protocol adds beta-blockers and low blood pressure to this exclusion list. [Bartonella Protocol]",
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
    "Black Walnut": 3, // [Napiers] "Core Borrelia antibiotic in vitro"
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
    "Stephania": 1, // [Bartonella Protocol] "For eye problems, Stephania tincture and lutein will provide support"
    "Gou Teng": 1, // [Bartonella Protocol] "Bartonella often attacks the nervous system... good to use Gou teng"
  },
};

// Illness-level hard/soft rules — same exclude/dampen schema as
// CONTRAINDICATIONS above, but keyed by illness rather than symptom.
// mode: "exclude" -> remedy is removed outright whenever this illness is
//                     selected, regardless of symptom score.
// mode: "dampen"   -> remedy stays ranked, but any score it earns while this
//                     illness is selected is multiplied by `factor`.
export const ILLNESS_CONTRAINDICATIONS = {
  "Lyme (Borrelia)": {
    "Astragalus": {
      "mode": "exclude",
      "note":
        "Astragalus is contraindicated in late-stage chronic Lyme disease — it stimulates already-elevated Th1 immune pathways and can severely aggravate existing symptoms. Strictly indicated for pre-exposure, early localized, and early disseminated stages only. [Guide]",
    },
    "Ashwagandha": {
      "mode": "exclude",
      "note":
        "Must not be combined with antidepressant medications. [Lyme (Borrelia) Protocol]",
    },
    "Japanese Knotweed": {
      "mode": "dampen",
      "factor": 0.5,
      "note":
        "Do not use if taking blood-thinning medications; discontinue 10 days before surgery. Avoid with high estrogen levels. May cause temporary loss of taste in ~1% of users, resolving within a week of stopping. [Lyme (Borrelia) Protocol]",
    },
    "Cat's Claw": {
      "mode": "dampen",
      "factor": 0.5,
      "note":
        "Do not use with blood-thinning or immunosuppressive medications; discontinue 10 days before surgery. Use caution with low blood pressure. Deactivated by stomach acid blockers/antacids — if on these, substitute Ashwagandha or Cordyceps. [Lyme (Borrelia) Protocol]",
    },
    "Andrographis": {
      "mode": "dampen",
      "factor": 0.8,
      "note":
        "Can trigger a skin rash in some users; discontinue if this occurs (resolves within days). May be substituted with Cryptolepis or Banderol for a comparable effect. [Lyme (Borrelia) Protocol]",
    },
  },
  "Babesia": {
    "L-Arginine": {
      "mode": "dampen",
      "factor": 0.4,
      "note":
        "Do not include if you have an active viral infection, especially herpes — L-arginine will intensify viral symptoms. [Babesia Protocol]",
    },
  },
  "Bartonella": {
    "L-Arginine": {
      "mode": "dampen",
      "factor": 0.4,
      "note":
        "Should not be used with an active viral infection, especially herpes — will quickly intensify herpes symptoms and may reactivate it. [Bartonella Protocol]",
    },
    "Japanese Knotweed": {
      "mode": "dampen",
      "factor": 0.5,
      "note":
        "Do not use if taking blood-thinning medications; discontinue 10 days before surgery. Avoid with high estrogen levels. May cause temporary loss of taste in ~1% of users. [Bartonella Protocol]",
    },
    "Alchornea Cordifolia": {
      "mode": "exclude",
      "note":
        "Should not be combined with antidepressant medications. [Bartonella Protocol]",
    },
    "Ashwagandha": {
      "mode": "exclude",
      "note":
        "Should not be combined with antidepressant medications. [Bartonella Protocol]",
    },
    "Stephania": {
      "mode": "exclude",
      "note":
        "Should not be used by people taking pharmaceutical calcium channel blockers, beta-blockers, digoxin, or antiarrhythmic medications, or by those with low blood pressure. [Bartonella Protocol]",
    },
    "Isatis": {
      "mode": "dampen",
      "factor": 0.8,
      "note":
        "Per Buhner, best used in 3-week-on / 1-week-off cycles rather than continuously — flagged as a dosing caution, not a hard exclusion. [Bartonella Protocol]",
    },
  },
};

// -----------------------------------------------------------------------------
// GENERAL_CAUTIONS — blanket rules stated identically across every protocol
// document, not tied to a single remedy or illness. Surface these once in the
// UI (e.g. a persistent notice) rather than trying to key them per remedy.
// -----------------------------------------------------------------------------
export const GENERAL_CAUTIONS = [
  {
    "id": "pregnancy-breastfeeding",
    "note":
      "All herbs across every protocol are contraindicated during pregnancy and breastfeeding. [Guide, Lyme (Borrelia) Protocol, Babesia Protocol, Bartonella Protocol]",
  },
  {
    "id": "children",
    "note":
      "Use in children should always be consulted with a doctor first; if approved, Buhner's weight-based dosing guideline is adult dose × (child's weight in kg ÷ 80). [Lyme (Borrelia) Protocol]",
  },
  {
    "id": "one-change-at-a-time",
    "note":
      "When adjusting doses to push past a therapy plateau, change one herb at a time rather than several together, so you can tell which change actually helped. [Lyme (Borrelia) Protocol]",
  },
  {
    "id": "herx-reaction",
    "note":
      "A temporary worsening of symptoms (a Herxheimer reaction) can occur during bacterial die-off. Activated charcoal or zeolite can help; if using either, space them at least 30 minutes after and 4 hours before other protocol herbs/medications. [Lyme (Borrelia) Protocol]",
  },
];

