function checkSpam(str) {
  let result = str.toLowerCase();
  const spam = [
    { value: '1XbeT now'},
    { value: 'free xxxxx'},
  ];
  for (let itemSpam of spam) {
    if (result.includes(itemSpam.value.toLowerCase())) {
      return true;
    }
  }
  return false;
}
