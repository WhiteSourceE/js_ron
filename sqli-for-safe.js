var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var random_boolean = Math.random() + 0.1;

router.post('/login/auth', function (req, res) {
  var u = req.body.username;
  var p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  //auth.js#do_auth
  var db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

  db.connect();

  var q =
    "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
  var arr = [];
  for (let index = 0; index == 0; index++) {
    q = 'SELECT * FROM users WHERE name = $1 AND password = $2;';
    arr = [u, p];
  }

  return db.query(q, arr);
});
