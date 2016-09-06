define(["./Base"],function(Base){
	var modelBase = new Base();

	var mIndex = {
		//获取作品列表
		getUserWorks : function(callback){
			var url = "/userWorksFindAction";
			var data = {};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		},
		//获取精灵模型列表
		getFairyTypeList : function(callback){
			var url = "/fairyTypeListAction";
			var data = {};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		},
		//判断精灵是否存在
		hasFairy : function(callback){
			var url = "/hasFairyAction";
			var data = {};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		},
		//添加精灵
		addFairy : function(formData,callback){
			var url = "/addFairyAction";
			var data = {
				"name":formData.name,
				"type":formData.type
			};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		}
	};

	return mIndex;
});