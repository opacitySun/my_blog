var dbHelper = require("../DBHelper/dbHelper");
var userWorksDao = require("../DBSql/userWorksDao");

module.exports = function(app){
    //获取项目列表
    app.all("/worksListFindAction",function(req,res){
        var conditions = {"type":req.body.type,"status":req.body.status};
        userWorksDao.findUserWorks(conditions,dbHelper,function(result){  
            console.log(JSON.stringify(result));
            res.json(result);
        });    
    });
}