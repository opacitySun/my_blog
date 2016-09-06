var dbHelper = require("../DBHelper/dbHelper"),
    userDao = require("../DBSql/userDao"),
    userWorksDao = require("../DBSql/userWorksDao"),
    newsDao = require("../DBSql/newsDao"),
    fairyDao = require("../DBSql/fairyDao"),
    fairyTypeDao = require("../DBSql/fairyTypeDao");

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
    //获取精灵模型列表
    app.all("/fairyTypeListAction",function(req,res){
        var conditions = {};
        fairyTypeDao.findFairyType(conditions,dbHelper,function(result){  
            res.json(result);
        });    
    });
    //判断精灵是否存在
    app.all("/hasFairyAction",function(req,res){
        var conditions0 = {
            "name":req.session.username,
            "password":req.session.password
        };
        userDao.findOneUser(conditions0,dbHelper,function(result0){
            var conditions1 = {
                "userId":result0.result._id.toString()
            };
            fairyDao.findOneFairy(conditions1,dbHelper,function(result1){  
                res.json(result1);
            });    
        });     
    });
}