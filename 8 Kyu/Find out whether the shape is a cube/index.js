let cubeChecker = function (volume, side) {
  if (volume <= 0 || side <= 0) {
    return false;
  }
  const total = side * side * side;
  return volume === total;
};
