import { postLoginUser } from "../../fetch/postLoginUser.js";

const login = document.getElementById("exampleInputEmail1");
const password = document.getElementById("exampleInputPassword1");
const button = document.querySelector(".btn");

async function autorization() {
  const user = {
    login: login.value,
    password: password.value,
  };
  console.log(user);
  const currentUser = await postLoginUser(user);

  if (currentUser.length !== 0) {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    if (login.value == "copp" && password.value === "password") {
      document.location.href = "../admin/adminPanel.html";
    } else {
      document.location.href = "../lk/lk.html";
    }
  } else {
    alert("Неверное имя или пароль!");
    login.value = "";
    password.value = "";
  }
}

button.addEventListener("click", e => {
  e.preventDefault();
  autorization();
});
