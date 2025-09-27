function filterRange(arr, a, b) {
  let newArr = [];
  for (let itemArr of arr) {
    if (itemArr >= a && itemArr <= b) {
      newArr.push(itemArr);
    }
  }
  return newArr;
}
