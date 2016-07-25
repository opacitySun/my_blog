var userInfo = require("../models/userInfo");

/** 
 * 调用公共add方法并且传入操作数据库的模型user 
 * @returns {Function} 
 */  
exports.addUserInfo = function(conditions,dbHelper,callback) {  
    //获取user模型  
    var userModel =userInfo.getModel();  
    dbHelper.addData(userModel,conditions,function(result) {  
        callback(result); 
    });  
};  

/** 
 * 调用公共find方法并且传入操作数据库的模型user 
 * @param conditions 
 * @param dbHelper 
 * @param callback 
 */  
exports.findUserInfo = function(conditions,dbHelper,callback) {  
    var userModel =userInfo.getModel();  
    var fields   = {};  
    var options  = {};  
    dbHelper.findOneData(userModel,conditions,fields,options,function(result){  
        callback(result);
    });  
}  

/** 
 * 调用公共remove方法并且传入操作数据库的模型user 
 * @param conditions 
 * @param dbHelper 
 * @param callback 
 */  
exports.removeUserInfo = function(conditions,dbHelper,callback) {  
    var userModel =userInfo.getModel();  
    dbHelper.removeData(userModel,conditions,function(result){  
        callback(result); 
    });  
}  

/** 
 * 调用公共update方法并且传入操作数据库的模型user 
 * @param conditions 
 * @param update 
 * @param options 
 * @param dbHelper 
 * @param callback 
 */  
exports.updateUserInfo = function(conditions,update,options,dbHelper,callback) {  
    var userModel =userInfo.getModel();  
    dbHelper.updateData(userModel,conditions,update,options,function(result){  
        callback(result);  
    });  
}  