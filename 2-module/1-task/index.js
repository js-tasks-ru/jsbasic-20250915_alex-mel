function sumSalary(salaries) {
  let sumSal = [];
  for (let prop in salaries) {
    if (Number.parseInt(salaries[prop])) {
      sumSal.push(salaries[prop]);
    }
  }
  return sumSal.reduce((sum, value) => sum + value, 0);
}


