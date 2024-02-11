import React from 'react';
import getNations from '../';

const testingData = [
    {
        nationId: "6",
        // keys
        era: "EA",
        name: "Mekone",
        epithet: "Brazen Giants",
        bless_bonus: 0,
        scalelimits: {},
        scales: {},
        // length
        numberOfCheapGods: 4,
        numberOfPretenders: 31,
    },
    {
        nationId: "67",
        // keys
        era: "MA",
        name: "Ind",
        epithet: "Magnificent Kingdom of Exalted Virtue",
        bless_bonus: 2,
        scalelimits: {},
        scales: { heat: 1 },
        // length
        numberOfCheapGods: 8,
        numberOfPretenders: 59,
    },
    {
        nationId: "65",
        // keys
        era: "MA",
        name: "Na'Ba",
        epithet: "Queens of the Desert",
        bless_bonus: 0,
        scalelimits: {},
        scales: { heat: 2 },
        // length
        numberOfCheapGods: 14,
        numberOfPretenders: 79,
    },
];

testingData.forEach(scenario => {
    const {
        nationId,
        era, name, epithet, bless_bonus, scalelimits, scales,
        numberOfCheapGods, numberOfPretenders
    } = scenario;
    const nation = getNations()[nationId];
    test(`Test of nation ${nationId} name`, () => {
        expect(nation.name).toEqual(name);
    });
    test(`Test of nation ${nationId} epithet`, () => {
        expect(nation.epithet).toEqual(epithet);
    });
    test(`Test of nation ${nationId} era`, () => {
        expect(nation.era).toEqual(era);
    });
    test(`Test of nation ${nationId} blessBonus`, () => {
        expect(nation.bless_bonus).toEqual(bless_bonus);
    });
    test(`Test of nation ${nationId} scales`, () => {
        expect(nation.scales).toEqual(scales);
    });
    test(`Test of nation ${nationId} numberOfCheapGods`, () => {
        const cheapGods = Object.keys(nation.cheap_gods)
              .filter(x => nation.pretenders.includes(x));
        expect(cheapGods.length).toEqual(numberOfCheapGods);
    });
    test(`Test of nation ${nationId} numberOfPretenders`, () => {
        expect(nation.pretenders.length).toEqual(numberOfPretenders);
    });
});
