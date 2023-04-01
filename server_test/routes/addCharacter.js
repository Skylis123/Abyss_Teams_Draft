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
    .then(() => console.log("Connected successfully"))
    .catch(e => console.log("Error connecting to database"));


router.post('/', (req, res) => {
    const username = req.body.username;
    const id = req.body.id;

    client.query(
        "INSERT INTO user_characters (username,character_id) VALUES ($1, $2)",
        [username, id],
        (err, result) => {
            if (err) {
                console.error("Error adding character to user list:", err);
                res.status(500).send("Error adding character to user list.");
            } else {
                console.log("Character added to user list");
                res.sendStatus(200);
            }
        }
    );
})

module.exports = router;