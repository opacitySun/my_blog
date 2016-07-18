var mongodb = require('mongodb');
var db = require("./db").getDB();   //连接数据库

db.open(function(err){
	if(!err){
		console.log('connect db');
	}else{
		console.log(err);
		return false;
	}
});

module.exports = {
	getModel : function(){
		return _getModel();
	},
	closeModel : function(){
		db.close();
	}
};

var _getModel = function(type,err){
	var userModel = db.collection('blog_user');
	return userModel;
}