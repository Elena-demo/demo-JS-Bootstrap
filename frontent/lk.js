const fio = document.querySelector(".fio");

const ls = JSON.parse(localStorage.getItem("fio"));
console.log(fio, ls[0].fio);

fio.textContent = ls[0].fio;
