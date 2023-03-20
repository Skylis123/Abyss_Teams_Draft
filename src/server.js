const {Client} = require('pg');
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password:"7811Dcb",
    database:"login_system"
})

client.connect()
.then(() => console.log("Connected successfuly"))
.catch(e => console.log("error"));

app.post('/register', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    client.query(
        "INSERT INTO testreglog (username,password) VALUES ($1, $2)", 
        [username, password], 
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log("works")
            }
        } 
    );  
})

app.post('/login', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    client.query(
        "SELECT * FROM testreglog WHERE username = $1 AND password = $2",
        [username, password],
        (err, result) =>{
            if(err) {
                res.send({err: err});
            }
            if(result.rows.length > 0) {
                res.send(result);
            } else {
                res.send({message : "Wrong username/password"});
            }
        }
    );
});

app.get('/charactersCount', (req, res) => {
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

app.post('/addCharacter', (req, res) =>{
    const username = req.body.username;
    const id = req.body.id;

    client.query(
        "INSERT INTO user_characters (username,character_id) VALUES ($1, $2)", 
        [username, id], 
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                console.log("works")
            }
        } 
    );  
})



app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });
