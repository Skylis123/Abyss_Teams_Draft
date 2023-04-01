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
    "INSERT INTO testreglog (username,password) VALUES ($1, $2)",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("works")
      }
    }
  );
});

module.exports = router;