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
        "DELETE FROM user_characters WHERE username = $1 AND character_id = $2",
        [username, id],
        (err, result) => {
            if (err) {
                console.error("Error removing character to user list:", err);
                res.status(500).send("Error removing character to user list.");
            } else {
                console.log("Character removed to user list");
                res.sendStatus(200);
            }
        }
    );
})

module.exports = router;