// const mysql = require("mysql");
import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "demo",
});

connection.connect(function (err) {
  if (err) {
    console.log("Подключение не установлено - ", err);
  } else {
    console.log("Подключение к серверу MySQL установлено");
  }
});
