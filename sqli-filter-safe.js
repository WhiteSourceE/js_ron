var pgp = require('pg-promise')();
var express = require('express');
var router = express.Router();

router.post('/login/auth', function (req, res) {
  var u = req.body.username;
  var p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  //auth.js#do_auth
  var db = pgp(
    'postgres://postgres:postgres@127.0.0.1' + '/' + 'vulnerablenode'
  );

  var qList = [
    "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';",
    'stuff',
    'other',
  ];

  let q = '';

  let newQList = qList.filter(
    (user) =>
      u ===
      "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';"
  );

  if (newQList.length >= 1) {
    q = 'SELECT * FROM users WHERE name = $1 AND password = $2;';
    arr = [u, p];
  } else {
    q =
      "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
  }

  return db.query(q, arr);
});