var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://123.57.50.14:27017/my_blog');   //连接数据库

// 链接错误
db.on('error', function(error) {
    console.log(error);
});

var mongooseSchema = mongoose.Schema;   //创建模型
var userScheMa = new mongooseSchema({
    name:{type:String},
    password:{type:String}
});   //定义了一个新的模型，但是此模式还未和users集合有关联

module.exports = {
	getModel : function(){
		return _getModel();
	},
	closeModel : function(){
		db.close();
	}
};

var _getModel = function(type,err){
	var userModel = global.db.model('blog_user',userScheMa);    //与blog_user集合关联
	return userModel;
}