define(['require','jquery','fnbase','./controller/c-recreation','./model/m-recreation'],function(require,$,fnbase,controller,model){
	//获取全部列表
	model.getAllList(function(res){
		var html = "";
    	if(res.result){
    		$.each(res.result,function(key,obj){
    			if(obj.type == 0){	//如果是电视剧
    				html += '<section class="s01">';
    				html += '<h2>';
    				html += '<span>'+obj.name+'</span>';
    				html += '<i>更多></i>';
    				html += '</h2>';
    				if(obj.data){
    					html += '<div class="akey">';
						html += '<img src="'+obj.data[0].image+'" />';
						html += '<span>'+obj.data[0].name+'</span>';
						html += '<em>'+obj.data[0].desc+'</em>';
						html += '</div>';
						html += '<ul>';
	    				$.each(obj.data,function(k,o){
	    					if(k != 0){
	    						if(k == 4){
	    							html += '<li style="margin-right:0">';
	    						}else{
	    							html += '<li>';
	    						}
								html += '<img src="'+o.image+'" />';
								html += '<span>'+o.name+'</span>';
								html += '<em>'+o.desc+'</em>';
								html += '</a>';
			    				html += '</li>';
	    					}
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