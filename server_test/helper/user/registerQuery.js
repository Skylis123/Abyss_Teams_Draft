const client = require('../database');

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
module.exports = { register };