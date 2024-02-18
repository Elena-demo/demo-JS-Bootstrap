import { postNewUser } from "../../fetch/postNewUser.js";

const email = document.getElementById("exampleInputEmail1");
const login = document.getElementById("exampleInputEmail2");
const password = document.getElementById("exampleInputPassword1");
const button = document.querySelector(".btn");
console.log(button);

button.addEventListener("click", e => {
  e.preventDefault();
  const userDate = {
    fio: "Ivanova",
    telefon: "+7(953)-183-123",
    email: email.value,
    login: login.value,
    password_user: password.value,
  };
  console.log(userDate);
  postNewUser(userDate);
  // window.location.replace("autorization.html");
  window.location.href = "autorization.html";

  //go page avtoriz
});

// insert into client(fio, telefon, email, login, password_user) values('Ivanov', '+7(953)-123-123', 'lena@gru.ru', 'lena', '123')
