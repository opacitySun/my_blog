var dbHelper = require("../DBHelper/dbHelper");
var userDao = require("../DBSql/userDao");
var userWorksDao = require("../DBSql/userWorksDao");
var newsDao = require("../DBSql/newsDao");

module.exports = function(app){
    //获取作品列表
    app.all("/userWorksFindAction",function(req,res){
        var conditions0 = {
            "name":req.session.username,
            "password":req.session.password
        };
        userDao.findOneUser(conditions0,dbHelper,function(result0){
            var conditions1 = {
                "userId":result0.result._id.toString()
            };
            userWorksDao.findUserWorks(conditions1,dbHelper,function(result1){  
                res.json(result1);
            });    
        });   
    });

    //获取新闻列表
    app.all("/newsListAction",function(req,res){
        var conditions = {};
        newsDao.findNews(conditions,dbHelper,function(result){  
            console.log(JSON.stringify(result));
            res.json(result);
        });    
    });
}