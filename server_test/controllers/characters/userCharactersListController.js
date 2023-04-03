const client = require("../../helper/database")
const userCharactersListQuery = require('../../helper/characters/userCharactersListQuery')

exports.userCharactersList = (req, res) => {
    const username = req.body.username;

    userCharactersListQuery.userCharactersList(username, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result)
        }
    })
};
