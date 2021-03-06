define(["./Base"],function(Base){
	var modelBase = new Base();

	var mWork = {
		//获取全部项目列表
		getAllList : function(callback){
			var url = "/worksAllListFindAction";
			var data = {};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		},
		//获取上线PC端项目列表
		getOnlinePCList : function(callback){
			var url = "/worksListFindAction";
			var data = {"type":0,"status":0};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		},
		//获取上线手机端项目列表
		getOnlinePhoneList : function(callback){
			var url = "/worksListFindAction";
			var data = {"type":1,"status":0};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		},
		//获取静态PC端项目列表
		getStaticPCList : function(callback){
			var url = "/worksListFindAction";
			var data = {"type":0,"status":1};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		},
		//获取静态手机端项目列表
		getStaticPhoneList : function(callback){
			var url = "/worksListFindAction";
			var data = {"type":1,"status":1};
			modelBase.postAjax(url,data,function(res){
				callback(res);
			});
		}
	};

	return mWork;
});