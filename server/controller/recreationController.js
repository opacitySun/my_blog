var dbHelper = require("../DBHelper/dbHelper");
var recreationDao = require("../DBSql/recreationDao");

module.exports = function(app){
    //获取全部项目列表
    app.all("/recreationAllListFindAction",function(req,res){
    	var result = {};

        var conditions = {};
        newsTypeDao.findNewsType(conditions,dbHelper,function(newsTypeResult){  
            console.log(JSON.stringify(newsTypeResult));
            result = newsTypeResult;
            recreationDao.findRecreation(conditions,dbHelper,function(recreationResult){  
            	console.log(JSON.stringify(recreationResult));
            	result.result.forEach(function(obj){
            		var recreationArr = [];
            		recreationResult.result.forEach(function(o){
            			if(obj.type == o.type){
            				newsArr.push(o);
            			}
            		});
            		if(recreationArr.length > 0){
            			obj["data"] = recreationArr;
            		}
            	});
            	res.json(result);
        	});    
        });     
    });
}