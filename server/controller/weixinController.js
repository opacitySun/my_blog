var http = require("http");
var url = require("url");
var crypto = require("crypto");
var wechat = require('wechat');

/**  
 * 提供操作表的公共路由，以供ajax访问  
 * @returns {Function}  
 */ 
exports.outerConnectAction = function(app){
    //
    app.all("/outerUserFindAction",function(req,res){
        
    });
}

/**  
 * 验证token 
 * @returns {Function}  
 */  
exports.validateToken = function(app) {   
    app.use("/wechat",function(req,res,next){
        function sha1(str){
          var md5sum = crypto.createHash("sha1");
          md5sum.update(str);
          str = md5sum.digest("hex");
          return str;
        }

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
 * 执行回复程序
 * @returns {Function}  
 */  
exports.reply = function(app) {   
    app.use(express.query());
    app.use("/wechat",wechat(config,function(req,res,next){
        // 微信输入信息都在req.weixin上
        var message = req.weixin;
        if (message.MsgType === 'text') {
            res.reply({ type: "text", content: "你说 " + message.Content});
        } else {
            // 回复高富帅(图文回复)
            res.reply([
              {
                title: '你来我家接我吧',
                description: '这是女神与高富帅之间的对话',
                picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
                url: 'http://nodeapi.cloudfoundry.com/'
              }
            ]);
        }
    }));
}  