
define(['require','jquery','./controller/c-login','./model/m-login'],function(require,$,controller,model){
    /*
    var controller = require('./controller/c-login'),
        model = require('./model/m-login');
        */

    controller.bottomPosition();
    controller.contentHeight();
    controller.defaultText();

    $("#loginReset").click(function(){
        controller.loginReset();
    });
    $("#loginClose").click(function(){
        controller.loginClose();
    });
    $("#loginOpen").click(function(){
        controller.loginOpen();
    });
});
