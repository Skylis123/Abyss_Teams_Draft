const loginQuery = require('../../helper/user/loginQuery')

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  loginQuery.login(username, password, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result)
    }
  });
}