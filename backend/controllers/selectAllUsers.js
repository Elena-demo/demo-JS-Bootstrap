import { connection } from "../db.js";

// connection.connect(function (err) {
//   if (err) {
//     console.log("Подключение не установлено - ", err);
//   } else {
//     console.log("Подключение к серверу MySQL установлено");
//   }
// });

export async function selectAllUsers(req, res) {
    connection.query("SELECT * from client", function(err, rows, fields) {
        if (err) console.log(err);
        console.log("All users ", rows);
        return res.json(rows);
    });
}