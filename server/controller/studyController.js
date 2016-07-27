var dbHelper = require("../DBHelper/dbHelper");
var studyDao = require("../DBSql/studyDao");
var studyTypeDao = require("../DBSql/studyTypeDao");

module.exports = function(app){
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