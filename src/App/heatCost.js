import scaleCost from './scaleCost';

const heatCost = (defaultLevel, level) => {
    return -Math.abs(scaleCost(defaultLevel, level));
};

export default heatCost;
