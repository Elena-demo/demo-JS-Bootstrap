import { getStatementsAll } from "../../fetch/getStatementsAll.js";

const table = document.querySelector(".tbody");

const data = await getStatementsAll();
console.log(data);

for (let i = 0; i < data.length; i++) {
  const tr = document.createElement("tr");
  table.append(tr);

  const itemArray = Object.values(data[i]);
  for (let i = 0; i < itemArray.length; i++) {
    const td = document.createElement("td");

    if (itemArray[i] == "new") {
      const btn = document.createElement("button");
      btn.classList.add("btn-dark");
      btn.classList.add("btn");
      btn.textContent = "Новая заявка";
      td.append(btn);
      tr.append(td);
    } else {
      td.textContent = itemArray[i];
      tr.append(td);
    }
  }
}

let btn = document.querySelector(".exit");
btn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  document.location.href = "../autorization/autorization.html";
});

document.addEventListener("click", e => {
  console.log(e.target);
});
