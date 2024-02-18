import { connection } from "../db.js";

export async function selectStatementsAll(req, res) {
  connection.query(
    "select statement.id, fio, number_auto, description, status from statement join client on client.id_user = statement.id_user",
    function (err, result) {
      if (err) console.log(err);
      else console.log(result);
      return res.json(result);
    }
  );
}
