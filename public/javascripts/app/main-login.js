
define(['require','jquery','./controller/c-login','./model/m-login'],function(require,$,controller,model){
    $("#loginDialog").on("keydown",function(event){
        if(event.keyCode == 13){
            controller.loginSubmit();
        }
    });
    $("#loginSubmit").on("click",function(){
        controller.loginSubmit();
    });
});
