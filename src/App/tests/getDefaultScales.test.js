import React from 'react';
import getDefaultScales from '../getDefaultScales';

const testingData = [
    // nationId, defaultScales
    // MA Ulm
    [  60, { order:  0, productivity:  0, heat:  0, growth:  0, fortune:  0, magic:  0 } ],
    // LA Mictlan
    [  111, { order:  0, productivity:  0, heat:  1, growth:  0, fortune:  0, magic:  0 } ],
    // EA Abysia
    [  16, { order:  0, productivity:  0, heat:  3, growth:  0, fortune:  0, magic:  0 } ],
    // MA Oceania
    [  87, { order:  0, productivity:  0, heat:  0, growth:  0, fortune:  0, magic:  0 } ],
    // LA Lemuria
    [  99, { order:  0, productivity:  0, heat:  0, growth: -2, fortune:  0, magic:  0 } ],
];

testingData.forEach(scenario => {
    const [ nationId, defaultScales ] = scenario;
    test(`defaultScales for nation ${nationId} is ${defaultScales}`, () => {
        expect(
            getDefaultScales(nationId))
            .toEqual(defaultScales);
    });
});
