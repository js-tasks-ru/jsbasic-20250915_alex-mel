function showSalary(users, age) {
  let userInfoData = [];
  for (let user in users) {
    if (users[user].age <= age) {
      let userName = users[user].name;
      let userBalance = users[user].balance;
      userInfoData.push([`${userName}, ${userBalance}`]);
    }
  }
  return userInfoData.join('\n');
}
