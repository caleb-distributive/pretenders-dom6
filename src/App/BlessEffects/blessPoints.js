export function totalBlessPoints(currentPaths, blessBonus) {
  return (currentPaths.f ? currentPaths.f - 1 : 0) +
         (currentPaths.a ? currentPaths.a - 1 : 0) +
         (currentPaths.w ? currentPaths.w - 1 : 0) +
         (currentPaths.e ? currentPaths.e - 1 : 0) +
         (currentPaths.s ? currentPaths.s - 1 : 0) +
         (currentPaths.d ? currentPaths.d - 1 : 0) +
         (currentPaths.n ? currentPaths.n - 1 : 0) +
         (currentPaths.g ? currentPaths.g - 1 : 0) +
         (currentPaths.b ? currentPaths.b - 1 : 0) +
         (blessBonus);
};