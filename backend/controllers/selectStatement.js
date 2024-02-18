import { connection } from "../db.js";

export async function selectStatement(req, res) {
  console.log(req.params.id);
  // console.log(req.body);

  const id = req.params.id;
  const sql =
    "select number_auto, description, status from statement where id_user = 1";

  connection.query(sql, id, function (err, results) {
    if (err) console.log(err);
    else console.log(results);
    return res.json(results);
  });
}
