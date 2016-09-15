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
		},
		//获取二级全部列表
		getSecondAllList : function(formData,callback){
			var url = "/studySecondAllListFindAction";
			var data = {"type":formData.type};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		},
		//获取详情
		getDetail : function(id,callback){
			var url = "/studyDetailAction";
			var data = {"id":id};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		}
	};

	return mStudy;
});