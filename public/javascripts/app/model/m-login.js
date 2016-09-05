
define(['./Base'],function(Base){
	var modelBase = new Base();

	var mLogin = {
		//查找用户
		findUser : function(username,pwd,callback){
			var url = "/outerUserFindAction";
			var data = {"name":username,"password":pwd};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		},
		//检验用户名是否已存在
		hasUserName : function(username,callback){
			var url = "/outerUserNameFindAction";
			var data = {"name":username};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		},
		//添加用户
		addUser : function(username,pwd,callback){
			var url = "/outerAddUserAction";
			var data = {"name":username,"password":pwd};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		},
		//登录
		login : function(username,pwd,callback){
			var url = "/outerLoginAction";
			var data = {"name":username,"password":pwd};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		}
	};

	return mLogin;
});