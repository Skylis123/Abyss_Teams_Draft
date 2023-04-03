const client = require('../database');

function userCharactersList(username, callback) {
    client.query(
        'SELECT character_id FROM user_characters WHERE username = $1',
        [username],
        (err, result) => {
            if (err) {
                return callback('Error', null);
            } else {
                const characterIds = result.rows.map(row => row.character_id);
                callback(null, characterIds)
            }
        }
    );
}

module.exports = { userCharactersList };