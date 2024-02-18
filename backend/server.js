import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { selectAllUsers } from "./controllers/selectAllUsers.js";
import { insertNewUser } from "./controllers/insertNewUser.js";
import { loginUser } from "./controllers/loginUser.js";
import { selectStatement } from "./controllers/selectStatement.js";
import { insertNewStatement } from "./controllers/insertNewStatement.js";
import { selectStatementsAll } from "./controllers/selectStatementsAll.js";

// import {selectAllUsers}

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/", selectAllUsers);
app.get("/user/:id", selectStatement);
app.get("/statementsAll", selectStatementsAll);

app.post("/", insertNewUser);
app.post("/user", loginUser);
app.post("/newStatement", insertNewStatement);

// app.post("/user/statements", selectStatement);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// selectAllUsers
