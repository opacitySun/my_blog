
define(['require','jquery','../lib/fnbase','./controller/c-index','./model/m-index'],function(require,$,fnbase,controller,model){
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

    //获取新闻列表
    model.getNewsList(function(res){
        var html = "";
        res.result.forEach(function(obj){
            html += '<li>';
            html += '<a target="_blank" href="'+obj.url+'">';
            html += '<span>'+obj.name+'</span>';
            html += '<em>'+fnbase.getFormatDateByLong(obj.createTime,true)+'</em>';
            html += '</a>';
            html += '</li>';
        });
        $("#newsList").html(html);
    });
});