import { getStatementsAll } from "../../fetch/getStatementsAll.js";
import { postUpdateStatusStatement } from "../../fetch/postUpdateStatusStatement.js";

const table = document.querySelector(".tbody");

// async function getStatements() {
const data = await getStatementsAll();
console.log(data);
// }

// getStatements();

function render() {
  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");
    table.append(tr);

    const itemArray = Object.values(data[i]);
    for (let i = 0; i < itemArray.length; i++) {
      const td = document.createElement("td");

      if (itemArray[i] == "new") {
        console.log(itemArray[0]);
        const btn = document.createElement("button");
        btn.id = itemArray[0];
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
}
render();

// for (let i = 0; i < data.length; i++) {
//   const tr = document.createElement("tr");
//   table.append(tr);
//   let str = "";

//   const itemArray = Object.values(data[i]);
//   for (let i = 0; i < itemArray.length; i++) {
//     // const td = document.createElement("td");
//     str += `<td></td>`;

//     if (itemArray[i] == "new") {
//       // const btn = document.createElement("button");
//       str += `<button class="btn-dark btn">Новая заявка</button>`;
//       // btn.classList.add("btn-dark");
//       // btn.classList.add("btn");
//       // btn.textContent = "Новая заявка";
//       // td.append(btn);
//       // tr.append(td);
//       tr.innerHTML = str;
//     } else {
//       // td.textContent = itemArray[i];
//       str += `<strong>${itemArray[i]}</strong>`;
//       // tr.append(td);
//       tr.innerHTML = str;
//     }
//   }
// }

let btn = document.querySelector(".exit");
btn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  document.location.href = "../autorization/autorization.html";
});

document.addEventListener("click", async e => {
  console.log(e.target.id);
  postUpdateStatusStatement({ id: e.target.id });
  location.reload();
});
