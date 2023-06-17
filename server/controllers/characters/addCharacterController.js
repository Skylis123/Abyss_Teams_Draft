const addCharacterQuerry = require('../../helper/db/characters')

exports.addCharacter = (req, res) => {
    const username = req.body.username;
    const id = req.body.id;

    addCharacterQuerry.addCharacter(username, id, (err, result) => {
        if (err) {
            res.status(500).send("Error adding character to user list.");
        } else {
            console.log("Character added to user list");
            res.sendStatus(200);
        }
    })
}
