export const SYMPTOMS = [
  "Body tremors",
  "Cardiac issues",
  "Heart palpitations",
  "Night sweats",
  "Joint pain",
  "Brain fog",
  "Fatigue",
  "Insomnia",
  "Headache",
];

export const REMEDIES = [
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
];

// WEIGHT_MATRIX[remedy][symptom] = weight
// Positive weight = symptom supports recommending the remedy.
// Negative weight = symptom is a soft caution (still shown, just scored down).
// Sample data only — replace with your own vetted values.
export const WEIGHT_MATRIX = {
  "Sida Acuta": {
    "Body tremors": 3,
    "Heart palpitations": -3,
    "Night sweats": 1,
    "Brain fog": 1,
    Fatigue: 1,
  },
  Cryptolepis: {
    "Night sweats": 2,
    "Joint pain": 1,
    Fatigue: 1,
    Headache: 1,
  },
  "Japanese Knotweed": {
    "Body tremors": 1,
    "Heart palpitations": 1,
    "Joint pain": 3,
    "Brain fog": 2,
    Headache: 1,
  },
  "Cat's Claw": {
    "Joint pain": 3,
    "Brain fog": 1,
    Fatigue: 1,
    Insomnia: -1,
  },
  "Bidens Pilosa": {
    "Body tremors": 1,
    "Night sweats": 1,
    "Joint pain": 1,
    Fatigue: 2,
  },
  Artemisia: {
    "Heart palpitations": -1,
    "Night sweats": 2,
    "Brain fog": 1,
    Fatigue: -1,
    Insomnia: -1,
    Headache: 1,
  },
  Allicin: {
    Fatigue: 1,
    "Joint pain": 1,
    Headache: 1,
    "Night sweats": 1,
  },
  Lumbrokinase: {
    "Joint pain": 2,
    "Brain fog": 1,
    Fatigue: 1,
  },
  Andrographis: {
    Fatigue: 1,
    Headache: 1,
    "Night sweats": 1,
    "Joint pain": 1,
  },
  "Chinese Skullcap": {
    "Brain fog": 2,
    Insomnia: 1,
    Headache: 1,
    "Joint pain": 1,
  },
  Houttuynia: {
    "Night sweats": 1,
    Fatigue: 1,
    Headache: 1,
  },
  "Cinnamon Clove & Oregano": {
    Fatigue: 1,
    "Joint pain": 1,
    "Night sweats": 1,
    Headache: 1,
  },
  Cumanda: {
    "Joint pain": 1,
    Fatigue: 1,
    "Night sweats": 1,
  },
  Curcumin: {
    "Joint pain": 3,
    "Brain fog": 1,
    Headache: 1,
  },
  Magnesium: {
    "Body tremors": 2,
    Insomnia: 2,
    "Heart palpitations": 1,
    "Joint pain": 1,
    Fatigue: 1,
  },
};

// REMEDY_INFO — a short description of what each remedy is and its general
// purpose. Shown to the user regardless of score, separate from the
// symptom-driven explanation. Sample text only — replace with your own.
export const REMEDY_INFO = {
  "Sida Acuta": {
    description:
      "A traditional herb used broadly for its calming, antimicrobial properties. Commonly reached for when neurological-type symptoms like tremors are present.",
  },
  Cryptolepis: {
    description:
      "An African-origin herb often used for its broad antimicrobial action, particularly associated with addressing night sweats and general systemic support.",
  },
  "Japanese Knotweed": {
    description:
      "Contains resveratrol and is often used for joint support and circulatory benefits, alongside general anti-inflammatory use.",
  },
  "Cat's Claw": {
    description:
      "A South American vine traditionally used for joint and immune support, with anti-inflammatory properties.",
  },
  "Bidens Pilosa": {
    description:
      "A flowering plant used traditionally for general immune and inflammatory support, often included in broader symptom-relief protocols.",
  },
  Artemisia: {
    description:
      "Best known for antiparasitic use, also used more broadly for general systemic support, though carries more cautions than some alternatives.",
  },
  Allicin: {
    description:
      "A compound derived from garlic, used for its broad antimicrobial properties and general immune support.",
  },
  Lumbrokinase: {
    description:
      "An enzyme derived from earthworms, used for fibrinolytic activity and often associated with biofilm-disruption strategies.",
  },
  Andrographis: {
    description:
      "A traditional herb used broadly for immune support and its antimicrobial and anti-inflammatory properties.",
  },
  "Chinese Skullcap": {
    description:
      "An herb used traditionally for calming and anti-inflammatory effects, often associated with cognitive and sleep-related support.",
  },
  Houttuynia: {
    description:
      "An herb used traditionally for antimicrobial and immune-supportive purposes.",
  },
  "Cinnamon Clove & Oregano": {
    description:
      "A blend of antimicrobial botanicals commonly used together, often associated with biofilm-disruption strategies.",
  },
  Cumanda: {
    description:
      "A South American herb used traditionally for antimicrobial and general systemic support.",
  },
  Curcumin: {
    description:
      "The active compound in turmeric, widely used for its anti-inflammatory properties, particularly for joint-related symptoms.",
  },
  Magnesium: {
    description:
      "An essential mineral involved in muscle and nerve function, often used to support tremors, sleep, and general relaxation.",
  },
};

// CONTRAINDICATIONS — hard rules that override the plain weighted score.
// mode: "exclude" -> remedy is removed from the ranked list entirely and
//                     shown in "Not recommended" instead, with the reason.
// mode: "dampen"   -> remedy stays ranked, but its score for that symptom
//                     is multiplied by `factor` (0.25 = 25% of normal weight).
export const CONTRAINDICATIONS = {
  "Sida Acuta": {
    "Cardiac issues": {
      mode: "exclude",
      note:
        "Cardiac issues is treated as a hard contraindication for Sida Acuta in this sample data, so it is not offered at all when that symptom is selected — regardless of how strongly other symptoms point toward it.",
    },
  },
  Artemisia: {
    "Cardiac issues": {
      mode: "dampen",
      factor: 0.25,
      note:
        "Cardiac issues heavily dampens Artemisia's score rather than excluding it outright, since this caution is treated as relative rather than absolute in this sample data.",
    },
  },
};