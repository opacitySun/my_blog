
define(['require','jquery','./controller/c-index','./model/m-index'],function(require,$,controller,model){
    $(".content_2 section dl:last").css("margin","0");

    model.getUserInfo(function(res){
    	$("#peopleImg").attr("src",res.result[0].image);
    	$("#peopleName").text(res.result[0].name);
    	$("#peopleDesc").text(res.result[0].desc);
    });

    model.getUserWorks(function(res){
    	var html = "";
    	res.result.forEach(function(work){
    		html += '<dl>';
			html += '<a href="'+work.workUrl+'">';
			html += '<dt><img src="'+work.workImg+'" alt="截图" /></dt>';
			html += '<dd>'+work.workName+'</dd>';
			html += '</a>';
    		html += '</dl>';
    	});
    	$("#userWorks").html(html);
    });
});