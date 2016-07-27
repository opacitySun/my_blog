define(["./Base"],function(Base){
	var modelBase = new Base();

	var mStudy = {
		//获取全部列表
		getAllList : function(callback){
			var url = "/studyAllListFindAction";
			var data = {};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		}
	};

	return mStudy;
});