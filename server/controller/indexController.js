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
            if(result0.success == 1){
                var conditions1 = {
                    "userId":result0.result._id.toString()
                };
                userWorksDao.findUserWorks(conditions1,dbHelper,function(result1){  
                    res.json(result1);
                });    
            }else{
                res.json(result0);
            }   
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
            if(result0.success == 1){
                var conditions1 = {
                    "userId":result0.result._id.toString()
                };
                fairyDao.findOneFairy(conditions1,dbHelper,function(result1){  
                    res.json(result1);
                });    
            }else{
                res.json(result0);
            }   
        });     
    });
    //添加精灵
    app.all("/addFairyAction",function(req,res){
        var conditions0 = {
            "name":req.session.username,
            "password":req.session.password
        };
        userDao.findOneUser(conditions0,dbHelper,function(result0){
            if(result0.success == 1){
                var thisTime = new Date().getTime();
                var conditions1 = {
                    "userId":result0.result._id.toString(),
                    "name":req.body.name,
                    "type":Number(req.body.type),
                    "level":1,
                    "exp":0,
                    "createTime":thisTime,
                    "updateTime":thisTime
                };
                fairyDao.addFairy(conditions1,dbHelper,function(result1){  
                    res.json(result1);
                });    
            }else{
                res.json(result0);
            }   
        });     
    });
}