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
	var  mongodb = require('mongodb');
	var  server  = new mongodb.Server('123.57.50.14', 27017, {auto_reconnect:true});
	var  db = new mongodb.Db('my_blog', server, {safe:true});
	db.open(function(err,db){
		if(!err){
			console.log('connect db');
			db.createCollection('blog_user', {safe:true}, function(table_err, collection){
	            if(table_err){
	                console.log(table_err);
	            }else{
	                collection.find({'name':req.body.login_name,'password':req.body.login_pwd},function(error,result){
	                	console.log(JSON.stringify(result));
	                }); 
	            }
        	});
		}else{
			console.log(err);
		}
	});
	//userController.userFindAction(req, res);
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
