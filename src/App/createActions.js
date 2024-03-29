import actionType from './actionType';

function createActions(dispatch) {
    return {
        changeNation: (id)  => {
            dispatch({type: actionType.CHANGE_NATION, payload: {id}});
        },
        resetAllPoints: ()   => {
            dispatch({type: actionType.RESET_ALL_POINTS});
        },
        changeFire: (level) => {
            dispatch({type: actionType.CHANGE_FIRE, payload: {level}});
        },
        changeAir: (level) => {
            dispatch({type: actionType.CHANGE_AIR, payload: {level}});
        },
        changeWater: (level) => {
            dispatch({type: actionType.CHANGE_WATER, payload: {level}});
        },
        changeEarth: (level) => {
            dispatch({type: actionType.CHANGE_EARTH, payload: {level}});
        },
        changeAstral: (level) => {
            dispatch({type: actionType.CHANGE_ASTRAL, payload: {level}});
        },
        changeDeath: (level) => {
            dispatch({type: actionType.CHANGE_DEATH, payload: {level}});
        },
        changeNature: (level) => {
            dispatch({type: actionType.CHANGE_NATURE, payload: {level}});
        },
        changeGlamour: (level) => {
            dispatch({type: actionType.CHANGE_GLAMOUR, payload: {level}});
        },
        changeBlood: (level) => {
            dispatch({type: actionType.CHANGE_BLOOD, payload: {level}});
        },
        resetMagicPoints: ()  => {
            dispatch({type: actionType.RESET_MAGIC_POINTS});
        },

        changeDominion: (level) => {
            dispatch({type: actionType.CHANGE_DOMINION, payload: {level}});
        },
        changeOrder: (level) => {
            dispatch({type: actionType.CHANGE_ORDER, payload: {level}});
        },
        changeProductivity: (level) => {
            dispatch({type: actionType.CHANGE_PRODUCTIVITY, payload: {level}});
        },
        changeHeat: (level) => {
            dispatch({type: actionType.CHANGE_HEAT, payload: {level}});
        },
        changeGrowth: (level) => {
            dispatch({type: actionType.CHANGE_GROWTH, payload: {level}});
        },
        changeFortune: (level) => {
            dispatch({type: actionType.CHANGE_FORTUNE, payload: {level}});
        },
        changeMagic: (level) => {
            dispatch({type: actionType.CHANGE_MAGIC, payload: {level}});
        },
        resetScalesPoints: ()  => {
            dispatch({type: actionType.RESET_SCALES_POINTS});
        },

        changeImprisonment: (level) => {
            dispatch({type: actionType.CHANGE_IMPRISONMENT, payload: {level}});
        },

        toggleImmobiles: () => {
            dispatch({type: actionType.TOGGLE_IMMOBILES});
        },
        toggleTitans: () => {
            dispatch({type: actionType.TOGGLE_TITANS});
        },
        toggleMonsters: () => {
            dispatch({type: actionType.TOGGLE_MONSTERS});
        },
        toggleHumanoids: () => {
            dispatch({type: actionType.TOGGLE_HUMANOIDS});
        },

        showBlessList: ()   => {
            dispatch({type: actionType.SHOW_BLESS_LIST});
        },
        closeBlessList: ()   => {
            dispatch({type: actionType.CLOSE_BLESS_LIST});
        },
        openPretenderOptimizer: () => {
            dispatch({type: actionType.OPEN_PRETENDER_OPTIMIZER});
        },
        closePretenderOptimizer: () => {
            dispatch({type: actionType.CLOSE_PRETENDER_OPTIMIZER});
        }
    }
}

export default createActions;
