define(['require','jquery','fnbase','./controller/c-news','./model/m-news'],function(require,$,fnbase,controller,model){
    var newsFun = {
        getAllList : function(){
            //获取全部列表
            model.getAllList(function(res){
                var html = "";
                if(res.result){
                    $.each(res.result,function(key,obj){
                        html += '<dl>';
                        html += '<dt>';
                        html += '<span>'+obj.name+'</span>';
                        html += '<i title="更多">more></i>';
                        html += '</dt>';
                        if(obj.data){
                            $.each(obj.data,function(k,o){
                                html += '<dd>';
                                html += '<a href="/news-detail?id='+o._id.toString()+'" title="'+o.name+'">';
                                html += '<span class="txt_ellipsis">'+o.name+'</span>';
                                html += '<i>'+fnbase.getSmpFormatDateByLong(o.updateTime,false)+'</i>';
                                html += '</a>';
                                html += '</dd>';
                            });
                        }
                        html += '</dl>';
                    });
                }else{
                    html = "暂无数据";
                }
                $("#newsAll").html(html);
            });
        },
        getDetail : function(id){
            model.getDetail(id,function(res){
                $("#newsDetail h1").text(res.result.name);
                $("#newsDetail article").text(res.result.desc);
            });
        }
    }

    var url = window.location.href;
    if(fnbase.inString("news-list",url)){
        newsFun.getAllList();
    }else if(fnbase.inString("news-detail",url)){
        var requestGet = fnbase.GetRequest();
        var urlId = requestGet["id"];
        newsFun.getDetail(urlId);
    }
});