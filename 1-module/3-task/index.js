function ucFirst(str) {
  if (str === '') {
    return '';
  }
  return str.at(0).toUpperCase() + str.substring(1);
}
