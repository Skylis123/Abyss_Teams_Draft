const express = require("express");
const router = express.Router();
const { Client } = require('pg');

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "7811Dcb",
  database: "login_system"
});

client.connect()
  .then(() => console.log("Connected successfuly"))
  .catch(e => console.log("error"));

  router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    client.query(
        "SELECT * FROM testreglog WHERE username = $1 AND password = $2",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.rows.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Wrong username/password" });
            }
        }
    );
});

module.exports = router;