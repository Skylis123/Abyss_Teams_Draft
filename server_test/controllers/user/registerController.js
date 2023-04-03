const registerQuery = require('../../helper/user/registerQuery')

exports.register = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  registerQuery.register(username, password, (err, result)=> {
    if(err) {
      console.log(err);
    } else {
      console.log(result)
    }
  })
};
