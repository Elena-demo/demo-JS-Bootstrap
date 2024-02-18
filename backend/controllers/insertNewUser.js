import { connection } from "../db.js";

export async function insertNewUser(req, res) {
  // const [fio, telefon, email, login, password_user] = req.userDate;

  console.log(req.body);

  const userDate = [
    req.body.fio,
    req.body.telefon,
    req.body.email,
    req.body.login,
    req.body.password_user,
  ];
  console.log(userDate);

  const sql =
    "insert into client (fio, telefon, email, login, password_user) values (?, ?, ?, ?, ?)";
  connection.query(sql, userDate, function (err, results) {
    if (err) console.log(err);
    else console.log("Данные добавлены");
  });
}

// connection.query("SELECT 1 + 1 AS solution", function (err, rows, fields) {
//   if (err) throw err;
//   console.log("The solution is: ", rows[0].solution);
// });
