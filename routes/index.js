var express = require('express');
var router = express.Router();
var user = require('../database/db').user,
	userClose = require('../database/db').userClose;

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
	var name = req.body.login_name,
		pwd = req.body.login_pwd;
	if(name == ''){
		console.log("用户名不能为空");
		return false;
	}
	if(pwd == ''){
		console.log("密码不能为空");
		return false;
	}
	var query = {name: name, password: pwd};
	user.find(query,function(err,result){
		if(err){
			console.log(err);
			res.redirect('/login');
		}else{
			console.log(query.name + ": 登陆成功 " + new Date());
			res.render('ucenter', { title:'ucenter' });
		}
		//关闭数据库链接
    	userClose();
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
