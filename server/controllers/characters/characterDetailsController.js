const characterDetailsQuery = require('../../helper/db/characters');

exports.charactersDetail = (req, res) => {
  const id = req.body.id;
  characterDetailsQuery.charactersDetail(id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
};