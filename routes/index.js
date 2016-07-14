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
	userController.userFindAction(req, res, function(result){
		if(result.success == 1){
			console.log(res.json(result));
			res.render('ucenter', { title:'ucenter' });
		}else{
			console.log(res.json(result));
			res.redirect('/');
		}
	});
	/*
	(function(){
		user.count(query, function(err, result){    //result:0是请求成功，1是请求失败
			if(result == 0){
				console.log(query.name + ": 登陆成功 " + new Date());
				res.render('ucenter', { title:'ucenter' });
			}else{
				console.log(query.name + ": 登陆失败 " + new Date());
				res.redirect('/login');
			}
	  	});
	})(query);
	*/
});

module.exports = router;
