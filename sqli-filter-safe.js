var mysql = require('mysql');
var express = require('express');
var router = express.Router();

router.post('/login/auth', function (req, res) {
  var u = req.body.username;
  var p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  var db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

  db.connect();
  var qList = [
    "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';",
    'stuff',
    'other',
  ];

  let q = '';

  let newQList = qList.filter(
    (user) => u === 'SELECT * FROM users WHERE name = $1 AND password = $2;'
  );

  if (newQList.length >= 1) {
    q = newQList[0];
    arr = [u, p];
  }

  return db.query(q, arr);
});
