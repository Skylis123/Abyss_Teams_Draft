const removeCharacterQuerry = require('../../helper/characters/removeCharacterQuery')

exports.removeCharacter = (req, res) => {
    const username = req.body.username;
    const id = req.body.id;

    removeCharacterQuerry.removeCharacter(username, id, (err, result) => {
        if (err) {
            res.status(500).send("Error removing character to user list.");
        } else {
            console.log("Character removed user list");
            res.sendStatus(200);
        }
    })
}
