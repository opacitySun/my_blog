var dbHelper = require("../DBHelper/dbHelper");
var userDao = require("../DBSql/userDao");

/**  
 * add user  
 * @returns {Function}  
 */  
exports.userAddAction = function() {  
    return function(req, res) {  
        var user = {
        	_id   : new global.mongoose.Types.ObjectId(),  
            name  : req.name,
            password : req.password
        };  
        /*
        for(var i=0;i<10;i++){  
            user.push({  
                _id   : new global.mongoose.Types.ObjectId(),  
                name  : req.name,
                password : req.password
            });  
        }  
        */
        userDao.addUser(user,dbHelper,function(result){  
            res.json(result);  
        });  
    }  
}  

/**  
 * get User  
 * @returns {Function}  
 */  
exports.userFindAction = function(req, res) {   
    var conditions ={name:req.body.login_name,password:req.body.login_pwd};  
    userDao.findUser(conditions,dbHelper,function(result){  
        if(result.success == 1){
            console.log(JSON.stringify(result));
            return res.render('ucenter', { title:'ucenter' });
        }else{
            console.log(JSON.stringify(result));
            console.log("用户名或密码不正确");
            return res.redirect('/login');
        }
        //res.json(result);  
    });    
}  

/**  
 * remove User  
 * @returns {Function}  
 */  
exports.userRemoveAction = function() {  
    return function(req, res) {  
        var conditions ={};  
        userDao.removeUser(conditions,dbHelper,function(result){  
            res.json(result);  
        });  
    }  
}  

/**  
 * update User  
 * @returns {Function}  
 */  
exports.userUpdateAction = function() {  
    return function (req, res) {    
        var conditions = {};  
        var update = {}//{$set : {userName:xxx}};  
        var options = {}//{upsert:false};  
        userDao.updateUser(conditions, update, options, dbHelper, function (result) {  
            res.json(result);  
        });  
    }  
}  