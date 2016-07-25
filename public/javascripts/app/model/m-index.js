
define(["./Base"],function(Base){
	var mIndex = {
		//获取用户信息
		getUserInfo : function(callback){
			var url = "/userInfoFindAction";
			var data = {};
			Base.postAjax(url,data,function(res){
				callback(res);
			});
		}
	};

	return mIndex;
});