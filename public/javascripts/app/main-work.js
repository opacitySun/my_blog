
define(['require','jquery','./controller/c-work','./model/m-work'],function(require,$,controller,model){
	var staticPath = $("#staticPath").val();

	//菜单按钮
	controller.menuButton();
	
    //获取全部项目列表
    model.getAllList(function(res){
    	var html = "";
    	if(res.result){
    		$.each(res.result,function(key,obj){
    			html += '<li>';
    			html += '<a target="_blank" href="'+obj.workUrl+'" rel="title" class="b-link-stripe b-animate-go thickbox">';
    			html += '<img src="'+staticPath+obj.workImg+'" alt="'+obj.workName+'" />';
    			html += '<div>';
    			html += '<h5>'+obj.workName+'</h5>';
    			//html += '<span>non suscipit leo fringilla non suscipit leo fringilla molestie</span>';
    			html += '</div>';
    			html += '</a>';
    			html += '</li>';
    		});
    		html += '<div class="clearfix"></div>';
    	}else{
    		html = "暂无数据";
    	}
    	$("#worksList").html(html);
    	controller.jqHoverdir();
    });
    //获取上线PC端项目列表
    $("#onlinePC").click(function(){
    	model.getOnlinePCList(function(res){
	    	var html = "";
	    	if(res.result){
	    		$.each(res.result,function(key,obj){
	    			html += '<li>';
	    			html += '<a target="_blank" href="'+obj.workUrl+'" rel="title" class="b-link-stripe b-animate-go thickbox">';
	    			html += '<img src="'+staticPath+obj.workImg+'" alt="'+obj.workName+'" />';
	    			html += '<div>';
	    			html += '<h5>'+obj.workName+'</h5>';
	    			//html += '<span>non suscipit leo fringilla non suscipit leo fringilla molestie</span>';
	    			html += '</div>';
	    			html += '</a>';
	    			html += '</li>';
	    		});
	    		html += '<div class="clearfix"></div>';
	    	}else{
	    		html = "暂无数据";
	    	}
	    	$("#worksList").html(html);
	    	controller.jqHoverdir();
	    });
    });
    //获取上线手机端项目列表
    $("#onlinePhone").click(function(){
    	model.getOnlinePhoneList(function(res){
	    	var html = "";
	    	if(res.result){
	    		$.each(res.result,function(key,obj){
	    			html += '<li>';
	    			html += '<a target="_blank" href="'+obj.workUrl+'" rel="title" class="b-link-stripe b-animate-go thickbox">';
	    			html += '<img src="'+staticPath+obj.workImg+'" alt="'+obj.workName+'" />';
	    			html += '<div>';
	    			html += '<h5>'+obj.workName+'</h5>';
	    			//html += '<span>non suscipit leo fringilla non suscipit leo fringilla molestie</span>';
	    			html += '</div>';
	    			html += '</a>';
	    			html += '</li>';
	    		});
	    		html += '<div class="clearfix"></div>';
	    	}else{
	    		html = "暂无数据";
	    	}
	    	$("#worksList").html(html);
	    	controller.jqHoverdir();
	    });
    });
    //获取静态PC端项目列表
    $("#staticPC").click(function(){
    	model.getStaticPCList(function(res){
	    	var html = "";
	    	if(res.result){
	    		$.each(res.result,function(key,obj){
	    			html += '<li>';
	    			html += '<a target="_blank" href="'+obj.workUrl+'" rel="title" class="b-link-stripe b-animate-go thickbox">';
	    			html += '<img src="'+staticPath+obj.workImg+'" alt="'+obj.workName+'" />';
	    			html += '<div>';
	    			html += '<h5>'+obj.workName+'</h5>';
	    			//html += '<span>non suscipit leo fringilla non suscipit leo fringilla molestie</span>';
	    			html += '</div>';
	    			html += '</a>';
	    			html += '</li>';
	    		});
	    		html += '<div class="clearfix"></div>';
	    	}else{
	    		html = "暂无数据";
	    	}
	    	$("#worksList").html(html);
	    	controller.jqHoverdir();
	    });
    });
    //获取静态手机端项目列表
    $("#staticPhone").click(function(){
    	model.getStaticPhoneList(function(res){
	    	var html = "";
	    	if(res.result){
	    		$.each(res.result,function(key,obj){
	    			html += '<li>';
	    			html += '<a target="_blank" href="'+obj.workUrl+'" rel="title" class="b-link-stripe b-animate-go thickbox">';
	    			html += '<img src="'+staticPath+obj.workImg+'" alt="'+obj.workName+'" />';
	    			html += '<div>';
	    			html += '<h5>'+obj.workName+'</h5>';
	    			//html += '<span>non suscipit leo fringilla non suscipit leo fringilla molestie</span>';
	    			html += '</div>';
	    			html += '</a>';
	    			html += '</li>';
	    		});
	    		html += '<div class="clearfix"></div>';
	    	}else{
	    		html = "暂无数据";
	    	}
	    	$("#worksList").html(html);
	    	controller.jqHoverdir();
	    });
    });
});