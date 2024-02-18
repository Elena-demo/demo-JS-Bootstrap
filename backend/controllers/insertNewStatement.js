import { connection } from "../db.js";

export function insertNewStatement(req, res) {
  console.log(req.body);
  const data = [req.body.id_user, req.body.numberAuto, req.body.description];
  const sql =
    "insert into statement(id_user, number_auto, description) values (?, ?, ?) ";

  connection.query(sql, data, function (error, results, fields) {
    if (error) console.log(error);
    // if (error) throw error; СЕРВЕР ПАДАЕТ
    else console.log("Данные добавлены");
  });
}
