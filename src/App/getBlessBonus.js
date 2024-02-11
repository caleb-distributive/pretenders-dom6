import getNations from '../getNations';
import { defaultTo } from 'ramda';

const getBlessBonus = (nationId) => {
    return getNations()[nationId].bless_bonus;
};

export default getBlessBonus;
