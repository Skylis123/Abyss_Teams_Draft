const historyQuery = require('../../helper/db/user');

exports.history = (req, res) => {
  const date = req.body.date;
  const username = req.body.username;
  const teamA_1 = req.body.teamA_1;
  const teamA_2 = req.body.teamA_2;
  const teamA_3 = req.body.teamA_3;
  const teamA_4 = req.body.teamA_4;
  const teamB_1 = req.body.teamB_1;
  const teamB_2 = req.body.teamB_2;
  const teamB_3 = req.body.teamB_3;
  const teamB_4 = req.body.teamB_4;
  const rating = req.body.rating;

  historyQuery.history(date, username, teamA_1, teamA_2, teamA_3, teamA_4, teamB_1, teamB_2, teamB_3, teamB_4, rating, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};
