var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', require('./routes/user/login'));
app.use('/register', require('./routes/user/register'));
app.use('/addCharacter', require('./routes/characters/addCharacter'));
app.use('/characters/Count', require('./routes/characters/charactersCount'));
app.use('/charactersCheck', require('./routes/characters/charactersCheck'));
app.use('/userCharactersList', require('./routes/characters/userCharactersList'));
app.use('/removeCharacter', require('./routes/characters/removeCharacter'));

app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server is running on port 4000");
});

module.exports = app;
