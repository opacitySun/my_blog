var dbHelper = require("../DBHelper/dbHelper");
var userDao = require("../DBSql/userDao");

/**  
 * 提供操作表的公共路由，以供ajax访问  
 * @returns {Function}  
 */ 
exports.outerConnectAction = function(app){
    //查找用户
    app.all("/outerUserFindAction",function(req,res){
        var conditions ={'name':req.body.name,'password':req.body.password};  
        userDao.findOneUser(conditions,dbHelper,function(result){  
            res.json(result); 
        });    
    });
    //检验用户名是否已存在
    app.all("/outerUserNameFindAction",function(req,res){
        var conditions ={'name':req.body.name};  
        userDao.findOneUser(conditions,dbHelper,function(result){  
            res.json(result); 
        });    
    });
    //添加用户
    app.all("/outerAddUserAction",function(req,res){
        var thisTime = new Date().getTime();
        var conditions ={
            'name':req.body.name,
            'password':req.body.password,
            'type':1,
            'createTime':thisTime,
            'updateTime':thisTime
        };  
        userDao.addUser(conditions,dbHelper,function(result){  
            res.json(result); 
        });    
    });
    //登录
    app.all("/outerLoginAction",function(req,res){
        var conditions ={'name':req.body.name,'password':req.body.password};  
        userDao.findOneUser(conditions,dbHelper,function(result){  
            if(result.success == 1){
                req.session.username=result.result.name;          
                req.session.password=result.result.password;
                req.session.regenerate(function (err) {
                    if(err){
                        console.log("session重新初始化失败.");
                    }else{
                        console.log("session被重新初始化.");
                    } 
                });   
                res.json(result);  
            }else{
                res.json(result);  
            }
        });    
    });
}

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
    var conditions ={'name':req.body.loginName,'password':req.body.loginPwd};  
    userDao.findOneUser(conditions,dbHelper,function(result){  
        if(result.success == 1){
            console.log(JSON.stringify(result));
            req.session.username=result.result.name;          
            req.session.password=result.result.password;
            req.session.regenerate(function (err) {
                if(err){
                    console.log("session重新初始化失败.");
                }else{
                    console.log("session被重新初始化.");
                } 
            });   
            //return res.render('ucenter', { title:'ucenter' });
            return res.redirect('/');
        }else{
            console.log(JSON.stringify(result));
            req.session.destroy(function (err) {
                if(err){
                    console.log("session销毁失败.");
                }else{
                    console.log("session被销毁.");
                } 
            });   
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