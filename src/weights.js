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
];

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
};

export const CONTRAINDICATIONS = {
  "Sida Acuta": {
    "Cardiac issues": {
      mode: "exclude",
      note: "Cardiac issues is treated as a hard contraindication for Sida Acuta in this sample data, so it is not offered at all when that symptom is selected.",
    },
  },
  Artemisia: {
    "Cardiac issues": {
      mode: "dampen",
      factor: 0.25,
      note: "Cardiac issues heavily dampens Artemisia's score rather than excluding it outright.",
    },
  },
};
