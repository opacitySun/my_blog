var db = require("./db").db;   //连接数据库

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
	var userModel = db.createCollection('blog_user', {safe:true});    //与blog_user集合关联
	return userModel;
}