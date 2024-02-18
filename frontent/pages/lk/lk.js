import { getStatements } from "../../fetch/getStatements.js";

const fio = document.querySelector(".fio");
const myStatements = document.querySelector(".my-stat");
// const myStatements = document.querySelector(".nav-link");

const ls = JSON.parse(localStorage.getItem("currentUser"));

console.log(ls);
console.log(ls[0].fio);

fio.textContent = ls[0].fio;

let btn = document.querySelector(".exit");
btn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  document.location.href = "../autorization/autorization.html";
});

function renderStatements(statements) {
  // if (document.querySelector(".table")) {
  //   document.querySelector(".table").remove();
  // }
  const table = document.querySelector(".table");
  // table.classList.add("table");
  // table.className = "table";
  const tr = document.createElement("tr");
  table.append(tr);

  const header = ["Описание", "Номер автомобиля", "Статус заявки"];
  for (let i = 0; i < header.length; i++) {
    const th = document.createElement("th");
    th.textContent = header[i];
    tr.append(th);
  }
  // document.querySelector(".table").append(table);
  // document.body.append(table);

  for (let i = 0; i < statements.length; i++) {
    const tr = document.createElement("tr");
    const data = Object.values(statements[i]);

    for (let i = 0; i < data.length; i++) {
      const td = document.createElement("td");
      td.textContent = data[i];
      tr.append(td);
    }
    table.append(tr);
  }
}

myStatements.addEventListener("click", async () => {
  const rezult = await getStatements(ls[0].id_user);
  console.log(rezult);
  renderStatements(rezult);
});
