
define(['require','jquery','./controller/c-index','./model/m-index'],function(require,$,controller,model){
    $(".content_2 section dl:last").css("margin","0");

    //获取用户信息
    model.getUserInfo(function(res){
    	$("#peopleImg").attr("src",res.result[0].image);
    	$("#peopleName").text(res.result[0].name);
    	$("#peopleDesc").text(res.result[0].desc);
    });

    //获取作品列表
    model.getUserWorks(function(res){
    	var html = "";
    	res.result.forEach(function(work){
    		html += '<dl title="'+work.workName+'">';
			html += '<a target="_blank" href="'+work.workUrl+'">';
			html += '<dt><img src="'+work.workImg+'" alt="截图" /></dt>';
			html += '<dd>'+work.workName+'</dd>';
			html += '</a>';
    		html += '</dl>';
    	});
    	$("#userWorks").html(html);
    });
});