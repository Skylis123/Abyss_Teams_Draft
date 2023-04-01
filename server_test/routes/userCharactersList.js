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

    client.query(
        'SELECT character_id FROM user_characters WHERE username = $1',
        [username],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error');
            } else {
                const characterIds = result.rows.map(row => row.character_id);
                res.send(characterIds);
            }
        }
    );
});

module.exports = router;