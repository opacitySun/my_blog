define(['require','jquery','fnbase','./controller/c-recreation','./model/m-recreation'],function(require,$,fnbase,controller,model){
	//获取全部列表
	model.getAllList(function(res){
		var html = "";
    	if(res.result){
    		$.each(res.result,function(key,obj){
    			if(obj.type == 0 || obj.type == 1){	//如果是电视剧:0,电影:1
    				html += '<section class="s01">';
    				html += '<h2>';
    				html += '<span>'+obj.name+'</span>';
    				html += '<i>更多></i>';
    				html += '</h2>';
    				if(obj.data){
    					html += '<div class="akey" title="'+obj.data[0].name+'">';
    					html += '<a href="'+obj.data[0].url+'">';
    					html += '<div class="img">';
						html += '<img src="'+obj.data[0].image+'" />';
						html += '</div>';
						html += '<span>'+obj.data[0].name+'</span>';
						html += '<em>'+obj.data[0].desc+'</em>';
						html += '</a>';
						html += '</div>';
						html += '<ul>';
	    				$.each(obj.data,function(k,o){
	    					if(k != 0){
	    						if(k == 4){
	    							html += '<li title="'+o.name+'" style="margin-right:0">';
	    						}else{
	    							html += '<li title="'+o.name+'">';
	    						}
	    						html += '<a href="'+o.url+'">';
	    						html += '<div class="img">';
								html += '<img src="'+o.image+'" />';
								html += '</div>';
								html += '<span>'+o.name+'</span>';
								html += '<em>'+o.desc+'</em>';
								html += '</a>';
			    				html += '</li>';
	    					}
		    			});
		    			html += '</ul>';
	    			}
    				html += '</section>';
    			}else if(obj.type == 2){	//图集
    				html += '<section class="s02">';
    				html += '<h2>';
    				html += '<span>'+obj.name+'</span>';
    				html += '<i>更多></i>';
    				html += '</h2>';
    				if(obj.data){
						html += '<ul>';
	    				$.each(obj.data,function(k,o){
    						if(k == 4){
    							html += '<li title="'+o.name+'" style="margin-right:0">';
    						}else{
    							html += '<li title="'+o.name+'">';
    						}
    						html += '<a href="'+o.url+'">';
    						html += '<div class="img">';
							html += '<img src="'+o.image+'" />';
							html += '</div>';
							html += '<span>'+o.name+'</span>';
							html += '</a>';
		    				html += '</li>';
		    			});
		    			html += '</ul>';
	    			}
    				html += '</section>';
    			}
    		});
    	}else{
    		html = "暂无数据";
    	}
    	$("#recreationAll").html(html);
	});
});