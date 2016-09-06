define(["./Base"],function(Base){
	var modelBase = new Base();

	var mFairy = {
		//根据id获取精灵全部信息
		getFairyAllInfoById : function(id,callback){
			var url = "/fairyAllInfoFindByIdAction";
			var data = {"id":id};
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
		}
	};

	return mFairy;
});