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
			var regName = $("#regName").val();
            regName = fnbase.trim(regName);
			controller.hasUserName(function(resHas){
				if(resHas == 1){
					$("#regName").parent().removeClass("has-error has-feedback").addClass("has-error has-feedback").find(".help-block").text("此用户名已被使用");
				}else{
					if(regName == ''){
						$("#regName").parent().removeClass("has-error has-feedback").addClass("has-error has-feedback").find(".help-block").text("用户名不能为空");
					}else{
						$("#regName").parent().removeClass("has-error has-feedback").find(".help-block").text("");
					}
				}
			});
		});
		$("#regPwd").on("change",function(){
			var regPwd = $("#regName").val();
            regPwd = fnbase.trim(regName);
			if(regPwd == ''){
				$("#regPwd").parent().removeClass("has-error has-feedback").addClass("has-error has-feedback").find(".help-block").text("密码不能为空");
			}else{
				$("#regPwd").parent().removeClass("has-error has-feedback").find(".help-block").text("");
			}
		});
		$("#confirmPwd").on("change",function(){
			var regPwd = $("#regName").val();
            regPwd = fnbase.trim(regName);
            var confirmPwd = $("#confirmPwd").val();
            confirmPwd = fnbase.trim(confirmPwd);
			if(confirmPwd != regPwd){
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
