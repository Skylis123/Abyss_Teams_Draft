const charactersNameQuery = require('../../helper/db/characters')

exports.charactersName = (req, res) => {
    const id = req.body.id;

    charactersNameQuery.charactersName(id , (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    })
};

