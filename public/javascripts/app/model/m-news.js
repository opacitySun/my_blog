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
		},
		//获取二级列表
		getSecondList : function(formData,callback){
			var url = "/newsSecondListFindAction";
			var data = {
				"currentPage":formData.currentPage,
				"pageSize":formData.pageSize,
				"type":formData.type
			};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		},
		//获取新闻详情
		getDetail : function(id,callback){
			var url = "/newsDetailAction";
			var data = {"id":id};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		}
	};

	return mNews;
});