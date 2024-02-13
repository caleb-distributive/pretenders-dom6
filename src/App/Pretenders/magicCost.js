function magicPathCost(basePath, newPathCost, path) {
  if (!basePath) {
    basePath = 0;
  }
  
  if (path <= basePath) {
    return 0;
  }

  if (basePath !== 0) {
    newPathCost = 8;
    path = path - basePath;
  }

  return newPathCost + 8*(0.5*(path*path+path)-1);
    
}

export function magicCost(basePaths, newPathCost, paths) {
  return (
      magicPathCost(basePaths.f, newPathCost, paths.f)
    + magicPathCost(basePaths.a, newPathCost, paths.a)
    + magicPathCost(basePaths.w, newPathCost, paths.w)
    + magicPathCost(basePaths.e, newPathCost, paths.e)
    + magicPathCost(basePaths.s, newPathCost, paths.s)
    + magicPathCost(basePaths.d, newPathCost, paths.d)
    + magicPathCost(basePaths.n, newPathCost, paths.n)
    + magicPathCost(basePaths.g, newPathCost, paths.g)
    + magicPathCost(basePaths.b, newPathCost, paths.b)
  );
}


// console.log( "Should be 350: " +
//   magicCost( {f: 0, a: 0, w: 0, e: 0, s: 1, d: 0, n: 0, b: 0}, 10,
//              {f: 1, a: 2, w: 0, e: 0, s: 3, d: 8, n: 0, b: 0}
//            )
// );
