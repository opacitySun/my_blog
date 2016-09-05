var dbHelper = require("../DBHelper/dbHelper");
var userWorksDao = require("../DBSql/userWorksDao");
var userDao = require("../DBSql/userDao");

module.exports = function(app){
    //获取项目列表
    app.all("/worksListFindAction",function(req,res){
        var conditions0 = {
            "name":req.session.username,
            "password":req.session.password
        };
        userDao.findOneUser(conditions0,dbHelper,function(result0){
            //type:0是PC,1是手机;status:0是在线,1是静态
            var conditions1 = {
                "userId":result0.result._id.toString(),
                "type":Number(req.body.type),
                "status":Number(req.body.status)
            };
            userWorksDao.findUserWorks(conditions1,dbHelper,function(result1){  
                res.json(result1);
            });    
        });
    });

    //获取全部项目列表
    app.all("/worksAllListFindAction",function(req,res){
        var conditions0 = {
            "name":req.session.username,
            "password":req.session.password
        };
        userDao.findOneUser(conditions0,dbHelper,function(result0){
            //type:0是PC,1是手机;status:0是在线,1是静态
            var conditions1 = {
                "userId":result0.result._id.toString()
            };
            userWorksDao.findUserWorks(conditions1,dbHelper,function(result1){  
                res.json(result1);
            });    
        });   
    });
}