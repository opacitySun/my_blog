var ObjectID = require("mongodb").ObjectID;
var dbHelper = require("../DBHelper/dbHelper");
var newsDao = require("../DBSql/newsDao");
var newsTypeDao = require("../DBSql/newsTypeDao");

module.exports = function(app){
    //获取全部项目列表
    app.all("/newsAllListFindAction",function(req,res){
    	var result = {};
        var conditions = {};
        var fields = {};
        newsTypeDao.findNewsType(conditions,dbHelper,function(newsTypeResult){  
            result = newsTypeResult;
            newsDao.findNews(conditions,fields,dbHelper,function(newsResult){  
            	result.result.forEach(function(obj){
            		var newsArr = [];
            		newsResult.result.forEach(function(o){
            			if(obj.type == o.type && newsArr.length < 2){
            				newsArr.push(o);
            			}
            		});
            		if(newsArr.length > 0){
            			obj["data"] = newsArr;
            		}
            	});
            	res.json(result);
        	});    
        });     
    });
    //获取二级项目列表
    app.all("/newsSecondListFindAction",function(req,res){
        var currentPage = req.body.currentPage;
        var pageSize = req.body.pageSize;
        var result = {};
        var conditions = {"type":Number(req.body.type)};
        var fields = {
            "currentPage":currentPage,
            "pageSize":pageSize
        };
        newsTypeDao.findOneNewsType(conditions,dbHelper,function(newsTypeResult){  
            if(newsTypeResult.success == 1){
                result = newsTypeResult;
                newsDao.findNews(conditions,fields,dbHelper,function(newsResult){  
                    if(newsResult.result){
                        result.result["data"] = newsResult.result;
                        result.total = newsResult.total;
                    }
                    res.json(result);
                });    
            }else{
                res.json(newsTypeResult);
            }  
        });     
    });
    //新闻详情
    app.all("/newsDetailAction",function(req,res){
        var id = req.body.id;
        var conditions = {"_id":ObjectID(id)};
        newsDao.findOneNews(conditions,dbHelper,function(result){  
            res.json(result);
        });    
    });
}