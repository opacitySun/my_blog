var url = require("url");
var sha1 = require("../WXHelper/wxSha1");
var sign = require('../WXHelper/signature');
var reply = require('../WXHelper/wxReply');
var menu = require('../WXHelper/wxMenu');

/**  
 * 提供操作表的公共路由，以供ajax访问  
 * @returns {Function}  
 */ 
exports.outerConnectAction = function(app){
    //获取数字签名
    app.all("/getWxConfigAction",function(req,res){
        var url = req.body.url;
        sign(url,function(result){
            res.json(result);
        });
    });
}

/**  
 * 验证token 
 * @returns {Function}  
 */  
exports.validateToken = function(app) {   
    app.use("/wechat",function(req,res,next){
        var query = url.parse(req.url,true).query;
        var signature = query.signature;
        var timestamp = query["timestamp"];
        var nonce = query.nonce;  
        var echostr = query.echostr;  
                    
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

/**  
 * 执行微信程序
 * @returns {Function}  
 */  
exports.program = function(app) {   
    //执行回复程序
    reply(app);
    //创建菜单
    menu.createMenu();
}  