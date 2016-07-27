define(["./Base"],function(Base){
	var modelBase = new Base();

	var mNews = {
		//获取全部列表
		getAllList : function(callback){
			var url = "/newsAllListFindAction";
			var data = {};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		}
	};

	return mNews;
});