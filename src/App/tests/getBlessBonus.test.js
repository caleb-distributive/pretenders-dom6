import React from 'react';
import getBlessBonus from '../getBlessBonus';

const testingData = [
    // nationId, blessBonus
    // MA Ulm
    [  60, 0 ],
    // LA Mictlan
    [  111, 3 ],
    // EA Abysia
    [  16, 2 ],
    // MA Oceania
    [  87, 0 ],
];

testingData.forEach(scenario => {
    const [ nationId, blessBonus ] = scenario;
    test(`blessBonus for nation ${nationId} is ${blessBonus}`, () => {
        expect(
            getBlessBonus(nationId))
            .toEqual(blessBonus);
    });
});
