const characterRatingController = require('../../helper/db/characters')

exports.characterRating = (req, res) => {
    const id = req.body.id;
    characterRatingController.characterRating(id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result)
        }
    })
};