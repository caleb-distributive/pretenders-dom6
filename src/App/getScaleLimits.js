import getNations from '../getNations';
import { defaultTo } from 'ramda';

const getScaleLimits = (nationId) => {
    const scalelimits = defaultTo(
        {},
        getNations()[nationId].scalelimits
    );
    const order = defaultTo(0, scalelimits.order);
    const productivity = defaultTo(0, scalelimits.productivity);
    const heat = defaultTo(0, scalelimits.heat);
    const growth = defaultTo(0, scalelimits.growth);
    const fortune = defaultTo(0, scalelimits.fortune);
    const magic = defaultTo(0, scalelimits.magic);
    return {
        order, productivity, heat,
        growth, fortune, magic
    };
};

export default getScaleLimits;
