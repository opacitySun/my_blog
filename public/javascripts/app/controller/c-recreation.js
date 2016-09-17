define(['jquery','fnbase','../model/m-recreation'],function($,fnbase,model) {
	var staticPath = $("#staticPath").val();

	var cRecreation = {
		//获取全部列表
		getAllList : function(){
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
			    					html += '<div class="col-md-2 child post-details">';
			    					html += '<a target="_blank" href="'+o.url+'" title="'+o.name+'" class="mask mask1"><img class="img-responsive zoom-img" src="'+staticPath+o.image+'" /></a>';
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
			    					html += '<div class="col-md-3 child post-details">';
			    					html += '<a target="_blank" href="'+o.url+'" title="'+o.name+'" class="mask mask2"><img src="'+staticPath+o.image+'" /></a>';
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
		}
	};

	return cRecreation;
});