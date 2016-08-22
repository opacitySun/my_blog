var dbHelper = require("../DBHelper/dbHelper");
var userInfoDao = require("../DBSql/userInfoDao");

module.exports = function(app){
    //获取用户信息
    app.all("/userInfoFindAction",function(req,res){
        var conditions = {};
        userInfoDao.findUserInfo(conditions,dbHelper,function(result){  
            console.log(JSON.stringify(result));
            res.json(result);
        });    
    });
}