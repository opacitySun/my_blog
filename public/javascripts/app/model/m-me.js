define(["./Base"],function(Base){
	var modelBase = new Base();

	var mMe = {
		//获取用户信息
		getUserInfo : function(callback){
			var url = "/userInfoFindAction";
			var data = {};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		}
	};

	return mMe;
});