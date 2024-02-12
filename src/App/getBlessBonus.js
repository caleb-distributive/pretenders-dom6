import getNations from '../getNations';

const getBlessBonus = (nationId) => {
    return getNations()[nationId].bless_bonus;
};

export default getBlessBonus;
