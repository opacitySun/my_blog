
define(['require','jquery','./controller/c-login','./model/m-login'],function(require,$,controller,model){
    /*
    var controller = require('./controller/c-login'),
        model = require('./model/m-login');
        */

    controller.bottomPosition();
    controller.contentHeight();
    //controller.defaultText();

    $("#loginReset").click(function(){
        controller.loginReset();
    });
    $("#loginClose").click(function(){
        controller.loginClose();
    });
    $("#loginOpen").click(function(){
        controller.loginOpen();
    });
    $("#loginDialog").on("keydown",function(event){
        if(event.keyCode == 13){
            var loginName = $("#loginName").val();
            var loginPwd = $("#loginPwd").val();
            if(loginName == ''){
                alert("用户名不能为空");
                return false;
            }
            if(loginPwd == ''){
                alert("密码不能为空");
                return false;
            }
            model.findUser(loginName,loginPwd,function(res){
                if(res.success == 1){
                    $("#loginDialog").submit();
                }else{
                    alert("用户名或密码不正确");
                }
            });
        }
    });

    window.onresize = function(){
        controller.bottomPosition();
        controller.contentHeight();
    }
});
