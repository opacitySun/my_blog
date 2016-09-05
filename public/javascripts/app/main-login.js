define(['jquery','fnbase','./controller/c-login','./model/m-login'],function($,fnbase,controller,model){
	var urlPath = fnbase.getRouterName();
	if(urlPath == "/login"){
		$("#loginDialog").on("keydown",function(event){
	        if(event.keyCode == 13){
	            controller.loginSubmit();
	        }
	    });
	    $("#loginSubmit").on("click",function(){
	        controller.loginSubmit();
	    });
	}else if(urlPath == "/register"){
		$("#regName").on("change",function(){
			if(controller.hasUserName() == true){
				$("#regName").parent().addClass("has-error has-feedback").find(".help-block").text("此用户名已被使用");
			}
		});
		$("#regSubmit").on("click",function(){
	        controller.regSubmit();
	    });
	}  
});
