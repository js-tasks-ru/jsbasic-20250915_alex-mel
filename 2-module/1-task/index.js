function sumSalary(salaries) {
  let sumOfSalary = 0;

  for (let prop in salaries) {
    let isSalary = typeof salaries[prop] === 'number' && Number.isFinite(salaries[prop]);

    if (isSalary) {
      sumOfSalary += salaries[prop];
    }
  }

  return sumOfSalary;
}


