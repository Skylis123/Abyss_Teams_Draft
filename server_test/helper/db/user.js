const client = require('../database');

client.connect()
  .then(() => console.log("Connected successfully"))
  .catch(e => console.log("error"));

function login(username, password, callback) {
    client.query(
        "SELECT * FROM testreglog WHERE username = $1 AND password = $2",
        [username, password],
        (err, result) => {
            if (err) {
                return callback(err,null);
            }
            if(result.rows.length > 0) {
                callback(null, result);
            } else {
                callback({ message: "Wrong username/password" }, null);
            }
        }
    )
}

function register(username, password, callback) {

    client.query(
        "INSERT INTO testreglog (username,password) VALUES ($1, $2)",
        [username, password],
        (err, result) => {
          if (err) {
            return callback(err, null);
          } else {
            callback(null,"works")
          }
        }
      );  
}



module.exports = { login, register };