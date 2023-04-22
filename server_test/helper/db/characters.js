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

function characterCount(callback) {
    client.query(
        'SELECT COUNT(*) FROM characters',
        (err, result) => {
            if (err) {
                console.log(err);
                return callback('Error', null);
            } else {
                callback(null, result.rows[0].count);
            }
        }
    );
}

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

function charactersName(id, callback) {
    client.query(
        'Select character_name from characters where character_id = $1',
        [id],
        (err, result) => {
            if (err) {
                return callback('Error', null);
            } else {
                const characterName = result.rows[0].character_name;
                callback(null,characterName)
            }
        }
    );
}




module.exports = {
    addCharacter,
    charactersCheck,
    characterCount,
    removeCharacter,
    userCharactersList, 
    charactersName
};