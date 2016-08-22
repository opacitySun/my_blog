define(['require','jquery','fnbase','./controller/c-recreation','./model/m-recreation'],function(require,$,fnbase,controller,model){
	var staticPath = $("#staticPath").val();

	//获取全部列表
	model.getAllList(function(res){
		var html = "";
    	if(res.result){
    		$.each(res.result,function(key,obj){
    			if(obj.type == 0 || obj.type == 1){	//电视剧:0,电影:1
    				html += '<div class="container">';
    				html += '<h3 class="tittle">'+obj.name+'</h3>';
    				html += '<div class="main">';
    				if(obj.data){
	    				$.each(obj.data,function(k,o){
	    					html += '<div class="col-md-2 child">';
	    					html += '<a target="_blank" href="'+o.url+'" title="'+o.name+'"><img src="'+staticPath+o.image+'" /></a>';
	    					html += '<p>'+o.name+'</p>';
	    					html += '</div>';
		    			});
	    			}
    				html += '</div>';
    				html += '</div>';
    			}else if(obj.type == 2){	//图集
    				html += '<div class="container">';
    				html += '<h3 class="tittle">'+obj.name+'</h3>';
    				html += '<div class="main">';
    				if(obj.data){
	    				$.each(obj.data,function(k,o){
	    					html += '<div class="col-md-3 child">';
	    					html += '<a target="_blank" href="'+o.url+'" title="'+o.name+'"><img src="'+staticPath+o.image+'" /></a>';
	    					html += '<p>'+o.name+'</p>';
	    					html += '</div>';
		    			});
	    			}
    				html += '</div>';
    				html += '</div>';
    			}
    		});
    	}else{
    		html = "暂无数据";
    	}
    	$("#recreationAll").html(html);
	});
});