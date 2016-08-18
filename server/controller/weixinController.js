var http = require("http");
var url = require("url");
var crypto = require("crypto");

/**  
 * 提供操作表的公共路由，以供ajax访问  
 * @returns {Function}  
 */ 
exports.outerConnectAction = function(app){
    //查找用户
    app.all("/outerUserFindAction",function(req,res){
        var conditions ={'name':req.body.name,'password':req.body.password};  
        userDao.findUser(conditions,dbHelper,function(result){  
            res.json(result); 
        });    
    });
}

/**  
 * get User  
 * @returns {Function}  
 */  
exports.validateToken = function(app) {   
    app.use(function(req,res,next){
        function sha1(str){
          var md5sum = crypto.createHash("sha1");
          md5sum.update(str);
          str = md5sum.digest("hex");
          return str;
        }

        var signature = req.body.signature;
        var timestamp = req.body.timestamp;
        var nonce = req.body.nonce;  
        var echostr = req.body.echostr;  
                    
        var token = "sunxxjjs8ceow90xc92";
        var tmpArr = [token, timestamp, nonce];
        tmpArr.sort();
        var tmpStr = tmpArr.join('');
        tmpStr = sha1( tmpStr );
        
        if( tmpStr == signature ){
            res.end(echostr);
            console.log("Confirm and send echo back");
        }else{
            res.end("false");
            console.log("Failed!");
        }
    });
}  