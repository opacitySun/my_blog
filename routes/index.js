var express = require('express');
var router = express.Router();
var userController = require('../server/controller/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'index' });
});

/* login */
router.get('/login', function(req, res) {
	res.render('login', { title: 'login' });
});

/* ucenter */
router.post('/ucenter', function(req, res) {
	userController.userFindAction(req, res);
});

/* works-list */
router.get('/works-list', function(req, res) {
	res.render('works-list', { title: '作品列表' });
});

/* study-list */
router.get('/study-list', function(req, res) {
	res.render('study-list', { title: '学习分享' });
});

/* study-detail */
router.get('/study-detail', function(req, res) {
	res.render('study-detail', { title: '学习分享详情' });
});

/* news-list */
router.get('/news-list', function(req, res) {
	res.render('news-list', { title: '消息新闻' });
});

/* news-detail */
router.get('/news-detail', function(req, res) {
	res.render('news-detail', { title: '新闻详情' });
});

/* recreation */
router.get('/recreation', function(req, res) {
	res.render('recreation', { title: '娱乐' });
});

module.exports = router;
