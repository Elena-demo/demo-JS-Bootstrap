import { postNewStatement } from "../../fetch/postNewStatement.js";

const numberAuto = document.querySelector(".number-auto");
const description = document.querySelector(".description");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  // e.preventDefault();
  sendNewStatement();
});

async function sendNewStatement() {
  const id_user = localStorage.getItem("currentUser");
  const newStatement = {
    id_user: 1,
    numberAuto: numberAuto.value,
    description: description.value,
  };
  console.log(newStatement);
  const responce = await postNewStatement(newStatement);
  const responceData = await responce.json();

  console.log(responceData);
  console.log(responce.status);

  if (responce.status === 400) {
    alert("Неверный формат номера автомобиля. Попробуйте ещё раз");
  } else {
    console.log("данные добавлены");
    alert("Заявление создано успешно");
    // document.location.href = "../lk/lk.html";
  }
}
