var express = require('express');
var router = express.Router();
var userController = require('../server/controller/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'welcome to sun blog',layout: 'layout.html' });
});

/* login */
router.get('/login', function(req, res, next) {
	res.render('login', { title: '登录',layout: false });
});

/* register */
router.get('/register', function(req, res, next) {
	res.render('register', { title: '注册',layout: false });
});

/* ucenter */
router.post('/ucenter', function(req, res, next) {
	userController.userFindAction(req, res);
});

/* works-list */
router.get('/works-list', function(req, res) {
	res.render('works-list', { title: '作品列表',layout: 'layout.html' });
});

/* study-list */
router.get('/study-list', function(req, res) {
	res.render('study-list', { title: '学习分享',layout: 'layout.html' });
});

/* study-detail */
router.get('/study-detail', function(req, res) {
	res.render('study-detail', { title: '学习分享详情',layout: 'layout.html' });
});

/* news-list */
router.get('/news-list', function(req, res) {
	res.render('news-list', { title: '消息新闻',layout: 'layout.html' });
});

/* news-detail */
router.get('/news-detail', function(req, res) {
	res.render('news-detail', { title: '新闻详情',layout: 'layout.html' });
});

/* recreation */
router.get('/recreation', function(req, res) {
	res.render('recreation', { title: '娱乐',layout: 'layout.html' });
});

/* me */
router.get('/me', function(req, res) {
	res.render('me', { title: '关于我',layout: 'layout.html' });
});

module.exports = router;
