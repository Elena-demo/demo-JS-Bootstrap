import { postNewStatement } from "../../fetch/postNewStatement.js";

const numberAuto = document.querySelector(".number-auto");
const description = document.querySelector(".description");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  sendNewStatement();
});

function sendNewStatement() {
  const id_user = localStorage.getItem("currentUser");
  const newStatement = {
    id_user: 1,
    numberAuto: numberAuto.value,
    description: description.value,
  };
  console.log(newStatement);
  postNewStatement(newStatement);
  document.location.href = "../lk/lk.html";
}
