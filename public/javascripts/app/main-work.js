
define(['require','jquery','./controller/c-work','./model/m-work'],function(require,$,controller,model){
	$(".works_list .left dd:first").css("display","block");

    $(".content .left dt").click(function(){
        controller.showDDList(this);
    });

    //获取上线PC端项目列表
    $("#onlinePC").click(function(){
    	model.getOnlinePCList(function(res){
	    	var html = "";
	    	if(res.result){
	    		$.each(res.result,function(key,obj){
	    			html += '<dl title="'+obj.workName+'">';
					html += '<a target="_blank" href="'+obj.workUrl+'">';
					html += '<dt><img src="'+obj.workImg+'" alt="截图" /></dt>';
					html += '<dd>'+obj.workName+'</dd>';
					html += '</a>';
		    		html += '</dl>';
	    		});
	    	}else{
	    		html = "暂无数据";
	    	}
	    	$("#worksList").html(html);
	    });
    });
    //获取上线手机端项目列表
    $("#onlinePhone").click(function(){
    	model.getOnlinePhoneList(function(res){
	    	var html = "";
	    	if(res.result){
	    		$.each(res.result,function(key,obj){
	    			html += '<dl title="'+obj.workName+'">';
					html += '<a target="_blank" href="'+obj.workUrl+'">';
					html += '<dt><img src="'+obj.workImg+'" alt="截图" /></dt>';
					html += '<dd>'+obj.workName+'</dd>';
					html += '</a>';
		    		html += '</dl>';
	    		});
	    	}else{
	    		html = "暂无数据";
	    	}
	    	$("#worksList").html(html);
	    });
    });
    //获取静态PC端项目列表
    $("#staticPC").click(function(){
    	model.getStaticPCList(function(res){
	    	var html = "";
	    	if(res.result){
	    		$.each(res.result,function(key,obj){
	    			html += '<dl title="'+obj.workName+'">';
					html += '<a target="_blank" href="'+obj.workUrl+'">';
					html += '<dt><img src="'+obj.workImg+'" alt="截图" /></dt>';
					html += '<dd>'+obj.workName+'</dd>';
					html += '</a>';
		    		html += '</dl>';
	    		});
	    	}else{
	    		html = "暂无数据";
	    	}
	    	$("#worksList").html(html);
	    });
    });
    //获取静态手机端项目列表
    $("#staticPhone").click(function(){
    	model.getStaticPhoneList(function(res){
	    	var html = "";
	    	if(res.result){
	    		$.each(res.result,function(key,obj){
	    			html += '<dl title="'+obj.workName+'">';
					html += '<a target="_blank" href="'+obj.workUrl+'">';
					html += '<dt><img src="'+obj.workImg+'" alt="截图" /></dt>';
					html += '<dd>'+obj.workName+'</dd>';
					html += '</a>';
		    		html += '</dl>';
	    		});
	    	}else{
	    		html = "暂无数据";
	    	}
	    	$("#worksList").html(html);
	    });
    });
});