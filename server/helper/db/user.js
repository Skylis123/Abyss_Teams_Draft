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

function history (date ,username ,teamA_1 ,teamA_2 ,teamA_3 ,teamA_4 ,teamB_1 ,teamB_2 ,teamB_3 ,teamB_4 ,rating ,callback) {
 client.query(
  "INSERT INTO history (username ,date , teamA_1 ,teamA_2 ,teamA_3 ,teamA_4 ,teamB_1 ,teamB_2 ,teamB_3 ,teamB_4, rating) VALUES($1 ,$2 ,$3 ,$4 ,$5 ,$6 ,$7 ,$8 ,$9 ,$10 ,$11)",
  [username ,date ,teamA_1 ,teamA_2 ,teamA_3 ,teamA_4 ,teamB_1 ,teamB_2 ,teamB_3 ,teamB_4, rating],
  (err, result) => {
    if (err) {
      return callback(err, null);
    } else {
      callback(null, "works")
    }
  }
 )
}

function historyList(username, callback) {
  client.query(
      "SELECT * FROM history where username = $1 ",
      [username],
      (err, result) => {
        if (err) {
          return callback(err, null);
        } else {
          callback(null, result.rows)
        }
      }
    );  
}




module.exports = { login, register, history ,historyList };