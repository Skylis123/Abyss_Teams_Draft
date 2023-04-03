const client = require('../database');

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

module.exports = { characterCount };