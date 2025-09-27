function getMinMax(str) {
  let newArrNum = str.split(' ')
        .map(num => Number(num))
        .filter(num => Number.isFinite(num));

  let min = Math.min.apply(null, newArrNum);
  let max = Math.max.apply(null, newArrNum);
  let result = {
    min: min,
    max: max
  };
  return result;
}
