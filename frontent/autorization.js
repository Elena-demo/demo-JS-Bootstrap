import { postLoginUser } from "./fetch/postLoginUser.js";

const login = document.getElementById("exampleInputEmail1");
const password = document.getElementById("exampleInputPassword1");
const button = document.querySelector(".btn");

async function autorization() {
  const user = {
    login: login.value,
    password: password.value,
  };
  console.log(user);
  const fio = await postLoginUser(user);
  console.log(fio);
  localStorage.setItem("fio", JSON.stringify(fio));

  document.location.href = "lk.html";
}

button.addEventListener("click", e => {
  e.preventDefault();
  autorization();
});
