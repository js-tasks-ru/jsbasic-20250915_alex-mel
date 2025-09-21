function truncate(str, maxlength) {
  const mark = '…';
  if (str.length >= maxlength) {
    str = str.slice(0, maxlength - 1) + mark;
  }
  return str;
}
