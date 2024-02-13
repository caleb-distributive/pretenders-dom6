export function dominionCost(baseDominion, dominion) {
    if (!baseDominion) {
      baseDominion = 1;
    }

    if (dominion <= baseDominion) {
      return 0;
    }

    dominion = dominion - baseDominion;
    
    return 7+7*(0.5*(dominion*dominion+dominion)-1);
}