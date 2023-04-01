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
        "SELECT * FROM user_characters WHERE username = $1 AND character_id = $2",
        [username, id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error');
            } else {
                res.send(result.rows.length > 0);
            }
        }
    );
});

module.exports = router;