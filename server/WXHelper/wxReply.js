var express = require('express');
var wechat = require('wechat');

module.exports = function(app){
    var config = {
      token: 'sunxxjjs8ceow90xc92',
      appid: 'wx69a406a1b3ddb9f4',
      encodingAESKey: 'FGS8kxzKdzST4GR2NSqNPjUTXIX3gdfRirBjFCQ1zoC'
    };
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