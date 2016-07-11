var express = require('express');
var router = express.Router();
var user = require('../database/db').user;

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
		alert("用户名不能为空");
		return false;
	}
	if(pwd == ''){
		alert("密码不能为空");
		return false;
	}
	var query = {name: name, password: pwd};
	(function(){
		user.count(query, function(err, doc){    //count返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件
			if(doc == 1){
				console.log(query.name + ": 登陆成功 " + new Date());
				res.render('ucenter', { title:'ucenter' });
			}else{
				console.log(query.name + ": 登陆失败 " + new Date());
				alert("用户名或密码不正确");
				//res.redirect('/');
			}
	  	});
	})(query);
});

module.exports = router;
