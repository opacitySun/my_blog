define(['require','jquery','fnbase','./controller/c-index','./model/m-index'],
function(require,$,fnbase,controller,model){
    var staticPath = $("#staticPath").val();

    //获取作品列表
    model.getUserWorks(function(res){
    	var html = "";
        if(res.result){
            $.each(res.result,function(key,obj){
                html += '<li>';
                html += '<div class="biseller-column">';
                html += '<a class="lightbox" target="_blank" href="'+obj.workUrl+'" title="'+obj.workName+'">';
                html += '<img src="'+staticPath+obj.workImg+'" alt="'+obj.workName+'" />';
                html += '</a>';
                html += '</div>';
                html += '</li>';
            });
        }
    	$("#userWorks").html(html);
        controller.flexisel();
    });

    //获取新闻列表
    /*
    model.getNewsList(function(res){
        var html = "";
        if(res.result){
            $.each(res.result,function(key,obj){
                html += '<li title="'+obj.name+'">';
                html += '<a target="_blank" href="/news-detail?id='+obj._id.toString()+'">';
                html += '<span class="txt_ellipsis">'+obj.name+'</span>';
                html += '<em>'+fnbase.getSmpFormatDateByLong(obj.updateTime,false)+'</em>';
                html += '</a>';
                html += '</li>';
            });
        }
        $("#newsList").html(html);
    });
    */
});