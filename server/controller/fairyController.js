var ObjectID = require("mongodb").ObjectID,
	dbHelper = require("../DBHelper/dbHelper"),
    fairyDao = require("../DBSql/fairyDao"),
    fairyTypeDao = require("../DBSql/fairyTypeDao"),
    fairyLevelDao = require("../DBSql/fairyLevelDao");

module.exports = function(app){
    //根据id获取精灵全部信息
    app.all("/fairyAllInfoFindByIdAction",function(req,res){
    	var id = req.body.id;
        var conditions0 = {"_id":ObjectID(id)};
        var result = {};
        fairyDao.findOneFairy(conditions0,dbHelper,function(result0){ 
        	if(result0.success == 1){
        		result = result0;
        		var conditions1 = {"type":result0.result.type};
        		fairyTypeDao.findOneFairyType(conditions1,dbHelper,function(result1){
                    if(result1.success == 1){
                        result.result["typeName"] = result1.result.name;
                        result.result["image"] = result1.result.image;
                        result.result["desc"] = result1.result.desc;
                        var conditions2 = {"level":Number(result0.result.level)+1};
                        fairyLevelDao.findOneFairyLevel(conditions2,dbHelper,function(result2){
                            if(result2.success == 1){
                                result.result["nextExp"] = result2.result.exp;
                                res.json(result);
                            }else{
                                res.json(result2);
                            }  
                        });
                    }else{
                        res.json(result1);
                    }	
        		});
        	}else{
        		res.json(result0);
        	} 
        });    
    });
    //判断精灵是否存在
    app.all("/hasFairyActionc",function(req,res){
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
    //签到
    app.all("/fairySkillAction",function(req,res){
        
    });
}