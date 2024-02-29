import { postNewUser } from "../../fetch/postNewUser.js";

const email = document.getElementById("exampleInputEmail1");
const login = document.getElementById("exampleInputEmail2");
const password = document.getElementById("exampleInputPassword1");
const button = document.querySelector(".btn");

button.addEventListener("click", async e => {
  // e.preventDefault();
  const userDate = {
    fio: "Petrova",
    telefon: "+7(953)-183-133",
    email: email.value,
    login: login.value,
    password_user: password.value,
  };
  console.log(userDate);
  console.log(email.value == "");
  if (email.value == "" || login.value == "" || password.value == "") {
    alert("Необходимо заполнить все поля!");
  } else {
    const responce = await postNewUser(userDate);
    const responceData = await responce.json();
    console.log(responceData);
    console.log(responce.status);

    if (responce.status === 400) {
      alert(responceData);
      alert("Измените данные при регистрации");
    } else {
      // window.location.replace("autorization.html");
      window.location.href = "../autorization/autorization.html";
    }
  }
});

// insert into client(fio, telefon, email, login, password_user) values('Ivanov', '+7(953)-123-123', 'lena@gru.ru', 'lena', '123')
