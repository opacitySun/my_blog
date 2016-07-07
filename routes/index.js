var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'index' });
});

/* login */
router.get('/login', function(req, res) {
    res.render('login', { title: 'login' });
});

module.exports = router;
