
define(['require','jquery','./controller/c-login','./model/m-login'],function(require,$,controller,model){
    $("#loginSubmit").on("click",function(){
        controller.loginSubmit();
    });
});
