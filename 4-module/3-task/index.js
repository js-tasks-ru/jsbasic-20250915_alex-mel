function highlight(table) {
  const ageList = [];
  const genderList = [];
  const statusList = [];
  const rows = table.getElementsByTagName('TR');
  const ageStop = 18;


  for (let i = 1; i < rows.length; i++) {
    for (let j = 1; j < rows[i].cells.length; j++) {
      if (j === 1) {
        ageList.push(rows[i].cells[j]);
      }
      if (j === 2) {
        genderList.push(rows[i].cells[j]);
      }
      if (j === 3) {
        statusList.push(rows[i].cells[j]);
      }

    }
  }
  ageList.forEach(el => {
    if (isFinite(el.innerText)) {
      let elemAge = Number.parseInt(el.innerText);
      if (elemAge < ageStop) {
        el.parentElement.style.textDecoration = 'line-through';
      }
    }
  });
  genderList.forEach(el => {
    if (el.innerText === 'm') {
      el.parentElement.classList.add('male');
    }
    if (el.innerText === 'f') {
      el.parentElement.classList.add('female');
    }
  });

  statusList.forEach(el => {
    if (!('available' in el.dataset)) {
      el.parentElement.hidden = true;
    }
    if (el.dataset.available === 'true') {
      el.parentElement.classList.add('available');
    } else {
      el.parentElement.classList.add('unavailable');
    }
  });
}

