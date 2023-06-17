const historyListQuery = require('../../helper/db/user');

exports.historyList = (req, res) => {

    const username = req.body.username;

    historyListQuery.historyList(username, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
};
