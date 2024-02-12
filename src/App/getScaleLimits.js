import getNations from '../getNations';
import { defaultTo } from 'ramda';

const getScaleLimits = (nationId) => {
    const scaleLimits = defaultTo(
        {},
        getNations()[nationId].scalelimits
    );
    const order = defaultTo(0, scaleLimits.order);
    const productivity = defaultTo(0, scaleLimits.productivity);
    const heat = defaultTo(0, scaleLimits.heat);
    const growth = defaultTo(0, scaleLimits.growth);
    const fortune = defaultTo(0, scaleLimits.fortune);
    const magic = defaultTo(0, scaleLimits.magic);
    return {
        order, productivity, heat,
        growth, fortune, magic
    };
};

export default getScaleLimits;
