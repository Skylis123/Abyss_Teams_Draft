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


    router.get('/', (req, res) => {
        client.query(
            'SELECT COUNT(*) FROM characters',
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Error fetching count');
                } else {
                    res.send((result.rows[0].count));
                }
            }
        );
    });
    
    router.use((req, res, next) => {
      console.log(req.method, req.url);
      next();
    });
    
    module.exports = router;