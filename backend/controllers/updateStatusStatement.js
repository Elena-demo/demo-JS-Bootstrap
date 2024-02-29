import { connection } from "../db.js";

export async function updateStatusStatement(req, res) {
  console.log(req.body);
  console.log(req.body.id);
  const id = [req.body.id];
  const sql = "update statement set status = 'confirmed' where id = ?";

  connection.query(sql, id, function (err, result) {
    if (err) {
      console.log(err);
      // console.log(err.sqlMessange);
    } else {
      // console.log(result);
      console.log("Данные изменены");
    }
  });
}
