import { connection } from "../db.js";

export async function loginUser(req, res) {
  console.log(req.body);

  const user = [req.body.login, req.body.password];
  const sql = "select fio from client where login = ? and password_user = ?";

  connection.query(sql, user, function (err, rezult) {
    if (err) console.log("user not found", err);
    else {
      console.log("user!!!", rezult);
    }
    return res.json(rezult);
  });
}
