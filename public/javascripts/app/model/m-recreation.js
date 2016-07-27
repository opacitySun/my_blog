define(["./Base"],function(Base){
	var modelBase = new Base();

	var mRecreation = {
		//获取全部列表
		getAllList : function(callback){
			var url = "/recreationAllListFindAction";
			var data = {};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		}
	};

	return mRecreation;
});