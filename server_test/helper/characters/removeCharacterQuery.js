const client = require('../database');

function removeCharacter(username, id, callback) {

    client.query(
        "DELETE FROM user_characters WHERE username = $1 AND character_id = $2",
        [username, id],
        (err, result) => {
            if (err) {
               console.log(err);
                return callback('Error', null);
            } else {
                callback(null, "Character removed from user list");
            }
        }
    );
}

module.exports = { removeCharacter };