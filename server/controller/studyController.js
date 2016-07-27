var dbHelper = require("../DBHelper/dbHelper");
var studyDao = require("../DBSql/studyDao");
var studyTypeDao = require("../DBSql/studyTypeDao");

module.exports = function(app){
    //获取项目列表
    app.all("/studyListFindAction",function(req,res){
    	//type:0是PC,1是手机;status:0是在线,1是静态
        var conditions = {"type":Number(req.body.type),"status":Number(req.body.status)};
        studyDao.findStudy(conditions,dbHelper,function(result){  
            console.log(JSON.stringify(result));
            res.json(result);
        });    
    });

    //获取全部项目列表
    app.all("/studyAllListFindAction",function(req,res){
    	var result = {};

        var conditions = {};
        studyTypeDao.findStudyType(conditions,dbHelper,function(studyTypeResult){  
            console.log(JSON.stringify(studyTypeResult));
            result = studyTypeResult;
            studyDao.findStudy(conditions,dbHelper,function(studyResult){  
            	console.log(JSON.stringify(studyResult));
            	result.result.forEach(function(obj){
            		var studyArr = [];
            		studyResult.result.forEach(function(o){
            			if(obj.type == o.type){
            				studyArr.push(o);
            			}
            		});
            		if(studyArr.length > 0){
            			obj["data"] = studyArr;
            		}
            	});
            	res.json(result);
        	});    
        });     
    });
}