const charactersCountQuery = require('../../helper/characters/charactersCountQuery')

exports.charactersCount = (req, res) => {

    charactersCountQuery.characterCount((err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    })
};

