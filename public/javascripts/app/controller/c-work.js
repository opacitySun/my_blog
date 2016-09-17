define(['jquery','hoverdir','../model/m-work'], function($,hoverdir,model) {
	var staticPath = $("#staticPath").val();
	
	var cWork = {
		jqHoverdir : function(){
			$('#worksList > li').each( function() { $(this).hoverdir(); } );
		},
		//菜单按钮
		menuButton : function(){
			$("#menuButton a").on("click",function(){
				$(this).parent().find("a").removeClass("current");
				$(this).addClass("current");
			});
		},
		//获取全部项目列表
		getAllList : function(){
			model.getAllList(function(res){
		    	var html = "";
		    	if(res.result){
		    		$.each(res.result,function(key,obj){
		    			html += '<li>';
		    			html += '<a target="_blank" href="'+obj.workUrl+'" rel="title" class="b-link-stripe b-animate-go thickbox">';
		    			html += '<img src="'+staticPath+obj.workImg+'" alt="'+obj.workName+'" />';
		    			html += '<div>';
		    			html += '<h5>'+obj.workName+'</h5>';
		    			html += '<span>'+obj.workDesc+'</span>';
		    			html += '</div>';
		    			html += '</a>';
		    			html += '</li>';
		    		});
		    		html += '<div class="clearfix"></div>';
		    	}else{
		    		html = "暂无数据";
		    	}
		    	$("#worksList").html(html);
		    	cWork.jqHoverdir();
		    });
		},
		//获取上线PC端项目列表
		getOnlinePCList : function(){
			model.getOnlinePCList(function(res){
		    	var html = "";
		    	if(res.result){
		    		$.each(res.result,function(key,obj){
		    			html += '<li>';
		    			html += '<a target="_blank" href="'+obj.workUrl+'" rel="title" class="b-link-stripe b-animate-go thickbox">';
		    			html += '<img src="'+staticPath+obj.workImg+'" alt="'+obj.workName+'" />';
		    			html += '<div>';
		    			html += '<h5>'+obj.workName+'</h5>';
		    			html += '<span>'+obj.workDesc+'</span>';
		    			html += '</div>';
		    			html += '</a>';
		    			html += '</li>';
		    		});
		    		html += '<div class="clearfix"></div>';
		    	}else{
		    		html = "暂无数据";
		    	}
		    	$("#worksList").html(html);
		    	cWork.jqHoverdir();
		    });
		},
		//获取上线手机端项目列表
		getOnlinePhoneList : function(){
			model.getOnlinePhoneList(function(res){
		    	var html = "";
		    	if(res.result){
		    		$.each(res.result,function(key,obj){
		    			html += '<li>';
		    			html += '<a target="_blank" href="'+obj.workUrl+'" rel="title" class="b-link-stripe b-animate-go thickbox">';
		    			html += '<img src="'+staticPath+obj.workImg+'" alt="'+obj.workName+'" />';
		    			html += '<div>';
		    			html += '<h5>'+obj.workName+'</h5>';
		    			html += '<span>'+obj.workDesc+'</span>';
		    			html += '</div>';
		    			html += '</a>';
		    			html += '</li>';
		    		});
		    		html += '<div class="clearfix"></div>';
		    	}else{
		    		html = "暂无数据";
		    	}
		    	$("#worksList").html(html);
		    	cWork.jqHoverdir();
		    });
		},
		//获取静态PC端项目列表
		getStaticPCList : function(){
			model.getStaticPCList(function(res){
		    	var html = "";
		    	if(res.result){
		    		$.each(res.result,function(key,obj){
		    			html += '<li>';
		    			html += '<a target="_blank" href="'+obj.workUrl+'" rel="title" class="b-link-stripe b-animate-go thickbox">';
		    			html += '<img src="'+staticPath+obj.workImg+'" alt="'+obj.workName+'" />';
		    			html += '<div>';
		    			html += '<h5>'+obj.workName+'</h5>';
		    			html += '<span>'+obj.workDesc+'</span>';
		    			html += '</div>';
		    			html += '</a>';
		    			html += '</li>';
		    		});
		    		html += '<div class="clearfix"></div>';
		    	}else{
		    		html = "暂无数据";
		    	}
		    	$("#worksList").html(html);
		    	cWork.jqHoverdir();
		    });
		},
		//获取静态手机端项目列表
		getStaticPhoneList : function(){
			model.getStaticPhoneList(function(res){
		    	var html = "";
		    	if(res.result){
		    		$.each(res.result,function(key,obj){
		    			html += '<li>';
		    			html += '<a target="_blank" href="'+obj.workUrl+'" rel="title" class="b-link-stripe b-animate-go thickbox">';
		    			html += '<img src="'+staticPath+obj.workImg+'" alt="'+obj.workName+'" />';
		    			html += '<div>';
		    			html += '<h5>'+obj.workName+'</h5>';
		    			html += '<span>'+obj.workDesc+'</span>';
		    			html += '</div>';
		    			html += '</a>';
		    			html += '</li>';
		    		});
		    		html += '<div class="clearfix"></div>';
		    	}else{
		    		html = "暂无数据";
		    	}
		    	$("#worksList").html(html);
		    	cWork.jqHoverdir();
		    });
		}
	};

	return cWork;
});