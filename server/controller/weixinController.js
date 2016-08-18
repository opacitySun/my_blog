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
exports.validateToken = function(req, res, next) {   
    function sha1(str){
      var md5sum = crypto.createHash("sha1");
      md5sum.update(str);
      str = md5sum.digest("hex");
      return str;
    }

    function validateToken(req,res){
      var query = url.parse(req.url,true).query;
      //console.log("*** URL:" + req.url);
      //console.log(query);
      var signature = query.signature;
      var echostr = query.echostr;
      var timestamp = query['timestamp'];
      var nonce = query.nonce;
      var oriArray = new Array();
      oriArray[0] = nonce;
      oriArray[1] = timestamp;
      oriArray[2] = "sunxxjjs8ceow90xc92";//这里是你在微信开发者中心页面里填的token
      oriArray.sort();
      var original = oriArray.join('');
      console.log("Original str : " + original);
      console.log("Signature : " + signature );
      var scyptoString = sha1(original);
      if(signature == scyptoString){
        res.end(echostr);
        console.log("Confirm and send echo back");
      }else {
        res.end("false");
        console.log("Failed!");
      }
    }

    var webSvr = http.createServer(validateToken);
    webSvr.listen(80,function(){
      console.log("Start validate");
    });
}  