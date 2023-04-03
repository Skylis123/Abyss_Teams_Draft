const client = require('../database');

function addCharacter(username, id, callback) {
    client.query(
        "INSERT INTO user_characters (username,character_id) VALUES ($1, $2)",
        [username, id],
        (err, result) => {
            if (err) {
                console.log(err);
                return callback('Error', null);
            } else {
                callback(null, "Character added to user list");
            }
        }
    );
}

module.exports = { addCharacter };