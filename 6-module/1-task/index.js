/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {

  constructor(rows) {
    this.rowsData = rows;
    this.elem = document.createElement('table');
    this.#render();
    this.#deleteRow();
  }
  #render() {
    this.tableData = `
        <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
        </thead>
          <tbody>
          ${this.rowsData.map(rowTable =>
    `
          <tr>
          <td>${rowTable.name}</td>
          <td>${rowTable.age}</td>
          <td>${rowTable.salary}</td>
          <td>${rowTable.city}</td>
          <td><button>X</button></td>
        </tr>
          `).join('')}
      </tbody>`;
    this.elem.innerHTML = this.tableData;
  }

  #deleteRow() {
    for (let button of this.elem.querySelectorAll("button")) {
      button.addEventListener('click', (event) => event.target.closest("tr").remove());
    }
  }
}
