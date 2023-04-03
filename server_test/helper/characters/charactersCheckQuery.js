const client = require('../database');

function charactersCheck(username, id, callback) {
    client.query(
        "SELECT * FROM user_characters WHERE username = $1 AND character_id = $2",
        [username, id],
        (err, result) => {
            if (err) {
                return callback('Error', null)
            } else {
                callback(null, result.rows.length > 0)
            }
        }
    )
}

module.exports = { charactersCheck };