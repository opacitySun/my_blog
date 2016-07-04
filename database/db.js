var mongoose = require('mongoose');
var db = mongoose.connect('123.57.50.14');   //连接数据库
var schema = mongoose.Schema;   //创建模型
var userScheMa = new Schema({
    name:"admin",
    password:"123456"
});   //定义了一个新的模型，但是此模式还未和users集合有关联
exports.user = db.model('blog_user',userScheMa);    //与blog_user集合关联
