
define(['./Base','fnbase','../model/m-login'], function (Base,fnbase,model) {
    var cLogin = {
        //重置登陆框
        loginReset : function(){
            $("#loginName").val("");
            $("#loginPwd").val("");
        },
        //登录
        loginSubmit : function(){
            var loginName = $("#loginName").val();
            loginName = fnbase.trim(loginName);
            var loginPwd = $("#loginPwd").val();
            loginPwd = fnbase.trim(loginPwd);
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
        },
        //注册
        regSubmit : function(){
            var regName = $("#regName").val();
            var regPwd = $("#regPwd").val();
            var confirmPwd = $("#confirmPwd").val();
            regName = fnbase.trim(regName);
            regPwd = fnbase.trim(regPwd);
            confirmPwd = fnbase.trim(confirmPwd);
            if(regName == ''){
                $("#regName").parent().removeClass("has-error has-feedback").addClass("has-error has-feedback").find(".help-block").text("用户名不能为空");
                return false;
            }
            if(regPwd == ''){
                $("#regPwd").parent().removeClass("has-error has-feedback").addClass("has-error has-feedback").find(".help-block").text("密码不能为空");
                return false;
            }
            if(confirmPwd != regPwd){
                $("#confirmPwd").parent().removeClass("has-error has-feedback").addClass("has-error has-feedback").find(".help-block").text("两次密码输入不一致");
                return false;
            }
            cLogin.hasUserName(function(resHas){
                if(resHas == 1){
                    $("#regName").parent().removeClass("has-error has-feedback").addClass("has-error has-feedback").find(".help-block").text("此用户名已被使用");
                }else{
                    model.addUser(regName,regPwd,function(res){
                        if(res.success == 1){
                            alert("注册成功");
                            model.login(regName,regPwd,function(resLogin){
                                if(resLogin.success == 1){
                                    window.location.href = "/";
                                }else{
                                    console.log(resLogin);
                                }
                            });
                        }else{
                            alert("注册失败");
                        }
                    });
                }
            });      
        },
        //检验用户名是否已存在
        hasUserName : function(callback){
            var regName = $("#regName").val();
            regName = fnbase.trim(regName);
            model.hasUserName(regName,function(res){
                callback(res.success);
            });
        }
    };

    return cLogin;
});