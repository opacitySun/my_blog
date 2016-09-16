var ObjectID = require("mongodb").ObjectID;
var dbHelper = require("../DBHelper/dbHelper");
var studyDao = require("../DBSql/studyDao");
var studyDetailDao = require("../DBSql/studyDetailDao");
var studyTypeDao = require("../DBSql/studyTypeDao");

module.exports = function(app){
    //获取全部项目列表
    app.all("/studyAllListFindAction",function(req,res){
    	var result = {};
        var conditions = {};
        var fields = {};
        studyTypeDao.findStudyType(conditions,dbHelper,function(studyTypeResult){  
            result = studyTypeResult;
            studyDao.findStudy(conditions,fields,dbHelper,function(studyResult){  
            	result.result.forEach(function(obj){
            		var studyArr = [];
            		studyResult.result.forEach(function(o){
            			if(obj.type == o.type && studyArr.length < 2){
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
    //获取二级全部项目列表
    app.all("/studySecondListFindAction",function(req,res){
        var currentPage = req.body.currentPage;
        var pageSize = req.body.pageSize;
        var result = {};
        var conditions = {"type":Number(req.body.type)};
        var fields = {
            "currentPage":currentPage,
            "pageSize":pageSize
        };
        studyTypeDao.findOneStudyType(conditions,dbHelper,function(studyTypeResult){  
            if(studyTypeResult.success == 1){
                result = studyTypeResult;
                studyDao.findStudy(conditions,fields,dbHelper,function(studyResult){  
                    if(studyResult.result){
                        result.result["data"] = studyResult.result;
                        result.total = studyResult.total;
                    }
                    res.json(result);
                });    
            }else{
                res.json(studyTypeResult);
            }   
        });     
    });
    //详情
    app.all("/studyDetailAction",function(req,res){
        var id = req.body.id;
        var conditions = {"studyId":id};
        studyDetailDao.findOneStudyDetail(conditions,dbHelper,function(result){  
            console.log(JSON.stringify(result));
            res.json(result);
        });    
    });
}