function camelize(str) {
  let newStringArray = str.split('-').map((item, index) => {
    if (index === 0) {
      return item;
    } else {
      return item.at(0).toUpperCase() + item.slice(1);
    }
  });
  return newStringArray.join('');
}
