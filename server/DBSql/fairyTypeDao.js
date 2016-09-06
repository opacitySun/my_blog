var fairyType = require("../models/fairyType");

/** 
 * 调用公共add方法并且传入操作数据库的模型
 * @returns {Function} 
 */  
exports.addFairyType = function(conditions,dbHelper,callback) {  
    //获取user模型  
    var dbModel =fairyType.getModel();  
    dbHelper.addData(dbModel,conditions,function(result) {  
        callback(result); 
    });  
};  

/** 
 * 调用公共find方法并且传入操作数据库的模型
 * @param conditions 
 * @param dbHelper 
 * @param callback 
 */  
exports.findFairyType = function(conditions,dbHelper,callback) {  
    var dbModel =fairyType.getModel();  
    var options  = {};  
    var fields  = {};  
    dbHelper.findData(dbModel,conditions,fields,options,function(result){  
        callback(result);
    });  
}  

/** 
 * 调用公共findOne方法并且传入操作数据库的模型
 * @param conditions 
 * @param dbHelper 
 * @param callback 
 */  
exports.findOneFairyType = function(conditions,dbHelper,callback) {  
    var dbModel =fairyType.getModel();  
    var fields   = {};  
    var options  = {};  
    dbHelper.findOneData(dbModel,conditions,fields,options,function(result){  
        callback(result);
    });  
}  

/** 
 * 调用公共remove方法并且传入操作数据库的模型
 * @param conditions 
 * @param dbHelper 
 * @param callback 
 */  
exports.removeFairyType = function(conditions,dbHelper,callback) {  
    var dbModel =fairyType.getModel();  
    dbHelper.removeData(dbModel,conditions,function(result){  
        callback(result); 
    });  
}  

/** 
 * 调用公共update方法并且传入操作数据库的模型
 * @param conditions 
 * @param update 
 * @param options 
 * @param dbHelper 
 * @param callback 
 */  
exports.updateFairyType = function(conditions,update,dbHelper,callback) {  
    var dbModel =fairyType.getModel();  
    dbHelper.updateData(dbModel,conditions,update,function(result){  
        callback(result);  
    });  
}  