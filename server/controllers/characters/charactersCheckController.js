const charactersCheckQuery = require('../../helper/db/characters')

exports.charactersCheck = (req, res) => {
    const username = req.body.username;
    const id = req.body.id;

    charactersCheckQuery.charactersCheck(username, id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result)
        }
    })
};
