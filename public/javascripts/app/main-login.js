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
			if(controller.hasUserName() == 1){
				$("#regName").parent().removeClass("has-error has-feedback").addClass("has-error has-feedback").find(".help-block").text("此用户名已被使用");
			}else if($(this).val() == ''){
				$("#regName").parent().removeClass("has-error has-feedback").addClass("has-error has-feedback").find(".help-block").text("用户名不能为空");
			}else{
				$("#regName").parent().removeClass("has-error has-feedback").find(".help-block").text("");
			}
		});
		$("#regPwd").on("change",function(){
			if($(this).val() == ''){
				$("#regPwd").parent().removeClass("has-error has-feedback").addClass("has-error has-feedback").find(".help-block").text("密码不能为空");
			}else{
				$("#regPwd").parent().removeClass("has-error has-feedback").find(".help-block").text("");
			}
		});
		$("#confirmPwd").on("change",function(){
			if($(this).val() != $("#regPwd").val()){
				$("#confirmPwd").parent().removeClass("has-error has-feedback").addClass("has-error has-feedback").find(".help-block").text("两次密码输入不一致");
			}else{
				$("#confirmPwd").parent().removeClass("has-error has-feedback").find(".help-block").text("");
			}
		});
		$("#regSubmit").on("click",function(){
	        controller.regSubmit();
	    });
	}  
});
