define(['jquery','fnbase','../model/m-me'],function($,fnbase,model){
	var staticPath = $("#staticPath").val();

	var cMe = {
		//获取用户信息
		getUserInfo : function(){
			model.getUserInfo(function(res){
		    	$("#peopleImg").attr("src",staticPath+res.result[0].image);
		    	$("#peopleName").text(res.result[0].name);
		    	$("#peopleDesc").html(res.result[0].desc);
		    });
		}
	};

	return cMe;
});