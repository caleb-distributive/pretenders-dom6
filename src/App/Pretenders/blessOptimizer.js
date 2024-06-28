/**
 * @param {Object} knownPaths 
 * @param {Object} basePaths 
 * @param {Number} newPathCost 
 * @param {Number} blessBonus 
 * @param {Number} pointsRemaining 
 * @returns {[God]}
 */
export function blessOptimizer(knownPaths, basePaths, newPathCost, blessBonus, pointsRemaining) {
  class God {
    constructor(knownPaths, newPaths, blessPoints, pointsRemaining) {
      this.knownPaths = {};
      for (const [path, pathValue] of Object.entries(knownPaths))
        this.knownPaths[path] = pathValue;
  
      this.newPaths = [];
      for (const [index, pathValue] of newPaths.entries())
        this.newPaths[index] = pathValue;
      
      this.blessPoints = blessPoints;
  
      this.pointsRemaining = pointsRemaining;
    }
  
    static fromGod(god) {
      return new God(god.knownPaths, god.newPaths, god.blessPoints, god.pointsRemaining);
    }
  
    static getPathIncrementCost(pathValue, baseValue) {
      return 8*(pathValue - baseValue + 1);
    }
  
    incrementKnownPath(path) {
      this.pointsRemaining -= God.getPathIncrementCost(this.knownPaths[path], basePaths[path]);
      this.knownPaths[path]++;
      this.blessPoints++;
    }
  
    incrementNewPath(path) {
      this.pointsRemaining -= God.getPathIncrementCost(this.newPaths[path], 0);
      this.newPaths[path]++;
      this.blessPoints++;
    }
    
    addNewPaths(n) {
      if ((newPathCost*n) > this.pointsRemaining)
        return false;
  
      this.pointsRemaining -= newPathCost*n;
  
      for (let i = 0; i < n; i++)
        this.newPaths.push(1);
  
      return true;
    }
  
  }

  const baseBlessPoints = Object.values(knownPaths).reduce((a, b) => a + b, 0) - Object.keys(knownPaths).length + blessBonus;

  const baseGod = new God(knownPaths, [], baseBlessPoints, pointsRemaining);

  let bestGods = [baseGod];
  bestGods.blessPoints = baseBlessPoints;

potentialGods:
  for (let i = 0; i <= 9 - Object.keys(baseGod.knownPaths).length; i++) {
    const potentialGod = God.fromGod(baseGod);
    if (!potentialGod.addNewPaths(i))
      break;
    
    while (true) {
      let cheapestKnownPaths = [];
      let cheapestNewPaths = [];
      let cheapestPathCost = Infinity;

      // find the set of cheapest paths to increment
      for (const [knownPath, knownPathValue] of Object.entries(potentialGod.knownPaths)) {
        const cost = God.getPathIncrementCost(knownPathValue, basePaths[knownPath]);
        if (cost > potentialGod.pointsRemaining)
          continue;
        if (cost === cheapestPathCost)
          cheapestKnownPaths.push(knownPath);
        else if (cost < cheapestPathCost) {
          cheapestKnownPaths = [knownPath];
          cheapestNewPaths = [];
          cheapestPathCost = cost;
        }
      }

      for (const [newPath, newPathValue] of potentialGod.newPaths.entries()) {
        const cost = God.getPathIncrementCost(newPathValue, 0);
        if (cost > potentialGod.pointsRemaining)
          continue;
        if (cost === cheapestPathCost)
          cheapestNewPaths.push(newPath);
        else if (cost < cheapestPathCost) {
          cheapestKnownPaths = [];
          cheapestNewPaths = [newPath];
          cheapestPathCost = cost;
        }
      }
        
      // if we have enough points to increment all of them, then do it and keep on going
      if (cheapestPathCost * (cheapestKnownPaths.length + cheapestNewPaths.length) <= potentialGod.pointsRemaining && cheapestKnownPaths.length + cheapestNewPaths.length !== 0) {
        cheapestKnownPaths.forEach((knownPath) => {potentialGod.incrementKnownPath(knownPath);});
        cheapestNewPaths.forEach((newPath) => {potentialGod.incrementNewPath(newPath);});
        continue;
      }

      // if we don't have enough points to increment all of them, then stop and check if this god is better than the best
      potentialGod.numberOfCheapestPaths = Math.floor(potentialGod.pointsRemaining/cheapestPathCost);
      potentialGod.blessPoints += potentialGod.numberOfCheapestPaths;
      
      // if the potentialGod has fewer blessPoints than the best, we stop immediately since that is only possible if
      // newPathCost has become too expensive, and we are iterating from fewest to most paths
      if (potentialGod.blessPoints < bestGods.blessPoints)
        break potentialGods; //skip all remaining potentialGods

      if (potentialGod.numberOfCheapestPaths > 0) {
        potentialGod.cheapestKnownPaths = cheapestKnownPaths;
        potentialGod.cheapestNewPaths = cheapestNewPaths;
      }
      
      potentialGod.pointsRemaining = potentialGod.pointsRemaining % cheapestPathCost;

      if (potentialGod.blessPoints > bestGods.blessPoints) {
        bestGods.length = 0;
        bestGods.blessPoints = potentialGod.blessPoints;
      }
      delete potentialGod.blessPoints;
      bestGods.push(potentialGod);
      
      break; //go to next potentialGod
    }
  }
  
  //we could not improve over the baseGod
  if (bestGods.length == 0)
    bestGods.push(baseGod);
    
  return bestGods.sort((a, b) => {
    if (a.pointsRemaining < b.pointsRemaining)
      return 1;
    if (a.pointsRemaining > b.pointsRemaining)
      return -1;
    return 0;
  });
}