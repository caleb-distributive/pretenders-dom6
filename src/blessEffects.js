export function getBlessEffects() {
  const blessData = [
    {id: 1   , f: 1, scales:{}, name: "Superior Morale",
      shortDescription: "+1 morale",
    },
    {id: 2   , f: 2, scales:{}, name: "Minor Fire Resistance",
      shortDescription: "Fire resistance +5",
    },
    {id: 3   , f: 3, scales:{}, name: "Major Fire Resistance",
      shortDescription: "Fire resistance +10",
    },
    {id: 4   , f: 1, d: 1, scales:{}, name: "Wasteland Survival",
      shortDescription: "Wasteland survival trait",
    },
    {id: 5   , f: 3, scales:{}, name: "Attack Skill",
      shortDescription: "+2 attack skill",
    },
    {id: 6   , f: 4, scales:{}, name: "Inspirational Presence",
      shortDescription: "+1 inspirational, +30 leadership",
    },
    {id: 7   , f: 5, scales:{}, name: "Death Explosion", incarnate: true,
      shortDescription: "10 AP damage, 5 AoE",
    },
    {id: 8   , f: 5, scales:{}, name: "Heat Aura", incarnate: true,
      shortDescription: "Heat 3, fire resistance 5",
    },
    {id: 9   , f: 6, scales:{}, name: "Fire Shield", incarnate: true,
      shortDescription: "",
    },
    {id: 10  , f: 6, scales:{}, name: "Flaming Weapons", incarnate: true,
      shortDescription: "",
    },
    {id: 11  , f: 7, scales:{}, name: "Awe", incarnate: true,
      shortDescription: "",
    },
    {id: 12  , a: 1, scales:{}, name: "Minor Shock Resistance",
      shortDescription: "",
    },
    {id: 13  , a: 1, scales:{}, name: "Precision",
      shortDescription: "",
    },
    {id: 14  , a: 2, scales:{}, name: "Farshot",
      shortDescription: "",
    },
    {id: 15  , a: 2, scales:{}, name: "Swiftness",
      shortDescription: "",
    },
    {id: 16  , a: 3, scales:{}, name: "Major Shock Resistance",
      shortDescription: "",
    },
    {id: 17  , a: 4, scales:{}, name: "Charged Bodies",
      shortDescription: "",
    },
    {id: 18  , a: 5, scales:{}, name: "Wind Walker", incarnate: true,
      shortDescription: "",
    },
    {id: 19  , a: 6, scales:{}, name: "Air Shield", incarnate: true,
      shortDescription: "",
    },
    {id: 20  , a: 7, scales:{}, name: "Thunder Weapons", incarnate: true,
      shortDescription: "",
    },
    {id: 21  , w: 1, scales:{}, name: "Minor Cold Resistance",
      shortDescription: "",
    },
    {id: 22  , w: 1, scales: {heat: -1}, name: "Winter’s Gift",
      shortDescription: "",
    },
    {id: 23  , w: 1, n: 1, scales:{}, name: "Swamp Survival",
      shortDescription: "",
    },
    {id: 24  , w: 2, scales:{}, name: "Water Walking",
      shortDescription: "",
    },
    {id: 25  , w: 3, scales:{}, name: "Major Cold Resistance",
      shortDescription: "",
    },
    {id: 26  , w: 3, scales:{}, name: "Defense Skill",
      shortDescription: "",
    },
    {id: 27  , w: 5, scales: {heat: -1}, name: "Frost Weapons", incarnate: true,
      shortDescription: "",
    },
    {id: 28  , w: 5, scales:{}, name: "Chill Aura", incarnate: true,
      shortDescription: "",
    },
    {id: 29  , w: 7, scales:{}, name: "Water Breathing", incarnate: true,
      shortDescription: "",
    },
    {id: 30  , w: 10, scales:{}, name: "Quickness", incarnate: true,
      shortDescription: "",
    },
    {id: 31  , e: 1, scales:{}, name: "Mountain Survival",
      shortDescription: "",
    },
    {id: 32  , e: 2, scales:{}, name: "Reinvigoration",
      shortDescription: "",
    },
    {id: 33  , e: 2, scales:{}, name: "Reconstruction",
      shortDescription: "",
    },
    {id: 34  , e: 3, scales:{}, name: "Strength of the Earth",
      shortDescription: "",
    },
    {id: 35  , e: 4, scales:{}, name: "Unbreakable",
      shortDescription: "",
    },
    {id: 36  , e: 5, scales:{}, name: "Fire & Shock Resistance", incarnate: true,
      shortDescription: "",
    },
    {id: 37  , e: 5, n: 3, scales:{}, name: "Larger", incarnate: true,
      shortDescription: "",
    },
    {id: 38  , e: 6, scales:{}, name: "Hard Skin", incarnate: true,
      shortDescription: "",
    },
    {id: 39  , e: 7, scales:{}, name: "Fortitude", incarnate: true,
      shortDescription: "",
    },
    {id: 40  , s: 1, scales:{}, name: "Minor Magic Resistance",
      shortDescription: "",
    },
    {id: 41  , s: 1, scales:{}, name: "Arcane Command",
      shortDescription: "",
    },
    {id: 42  , s: 1, d: 1, scales:{}, name: "Spirit Sight",
      shortDescription: "",
    },
    {id: 43  , s: 2, scales:{}, name: "Magic Weapons",
      shortDescription: "",
    },
    {id: 44  , s: 3, scales:{}, name: "Major Magic Resistance",
      shortDescription: "",
    },
    {id: 45  , s: 3, f: 1, scales:{}, name: "Solar Weapons",
      shortDescription: "",
    },
    {id: 46  , s: 4, scales:{}, name: "Far Caster",
      shortDescription: "",
    },
    {id: 47  , s: 4, scales:{}, name: "Arcane Finesse",
      shortDescription: "",
    },
    {id: 48  , s: 6, scales:{}, name: "Twist Fate", incarnate: true,
      shortDescription: "",
    },
    {id: 49  , s: 7, scales: {fortune: -1},name: "Fateweaving", incarnate: true,
      shortDescription: "",
    },
    {id: 50  , s: 8, scales: {fortune: 1},name: "Luck", incarnate: true,
      shortDescription: "",
    },
    {id: 51  , s: 10, scales: {magic: 1},name: "Etherealness", incarnate: true,
      shortDescription: "",
    },
    {id: 52  , d: 1, scales:{}, name: "Undying",
      shortDescription: "",
    },
    {id: 53  , d: 1, scales:{}, name: "Undead Command",
      shortDescription: "",
    },
    {id: 54  , d: 2, scales: {growth: -2}, name: "Half Dead",
      shortDescription: "",
    },
    {id: 55  , d: 4, scales:{}, name: "Withering Weapons",
      shortDescription: "",
    },
    {id: 56  , d: 5, scales:{}, name: "Stygian Flesh", incarnate: true,
      shortDescription: "",
    },
    {id: 57  , d: 7, scales:{}, name: "Reanimators", incarnate: true,
      shortDescription: "",
    },
    {id: 58  , d: 7, scales:{}, name: "Reforming Flesh", incarnate: true,
      shortDescription: "",
    },
    {id: 59  , d: 8, scales:{}, name: "Death Weapons", incarnate: true,
      shortDescription: "",
    },
    {id: 60  , d: 10, scales:{}, name: "Fear", incarnate: true,
      shortDescription: "",
    },
    {id: 61  , n: 1, scales:{}, name: "Resilient",
      shortDescription: "",
    },
    {id: 62  , n: 1, scales:{}, name: "Low Light Vision",
      shortDescription: "",
    },
    {id: 63  , n: 1, scales:{}, name: "Minor Poison Resistance",
      shortDescription: "",
    },
    {id: 64  , n: 2, scales:{}, name: "Major Poison Resistance",
      shortDescription: "",
    },
    {id: 65  , n: 2, scales:{}, name: "Forest Survival",
      shortDescription: "",
    },
    {id: 66  , n: 3, scales: {magic: 1}, name: "Unaging",
      shortDescription: "",
    },
    {id: 67  , n: 4, scales: {growth: -1}, name: "Poison Weapons",
      shortDescription: "",
    },
    {id: 68  , n: 5, scales:{}, name: "Recuperation", incarnate: true,
      shortDescription: "",
    },
    {id: 69  , n: 5, scales:{}, name: "Berserker", incarnate: true,
      shortDescription: "",
    },
    {id: 70  , n: 6, scales:{}, name: "Barkskin", incarnate: true,
      shortDescription: "",
    },
    {id: 71  , n: 7, scales:{}, name: "Regeneration", incarnate: true,
      shortDescription: "",
    },
    {id: 72  , b: 1, scales:{}, name: "Strong Vitae",
      shortDescription: "",
    },
    {id: 73  , b: 3, scales:{}, name: "Strength of the Flesh",
      shortDescription: "",
    },
    {id: 74  , b: 4, scales:{}, name: "Blood Surge",
      shortDescription: "",
    },
    {id: 75  , b: 5, scales:{}, name: "Blood Bond", incarnate: true,
      shortDescription: "",
    },
    {id: 76  , b: 6, scales:{}, name: "Unholy Weapons", incarnate: true,
      shortDescription: "",
    },
    {id: 77  , b: 8, scales:{}, name: "Blood Vengeance", incarnate: true,
      shortDescription: "",
    },
  ]
  blessData.forEach(effect => {
    if (!effect.f) {effect.f = 0}
    if (!effect.a) {effect.a = 0}
    if (!effect.w) {effect.w = 0}
    if (!effect.e) {effect.e = 0}
    if (!effect.s) {effect.s = 0}
    if (!effect.d) {effect.d = 0}
    if (!effect.n) {effect.n = 0}
    if (!effect.b) {effect.b = 0}
  });
  return blessData;
}