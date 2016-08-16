define(['require','jquery','fnbase','./controller/c-news','./model/m-news'],function(require,$,fnbase,controller,model){
    var staticPath = $("#staticPath").val();

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
                                html += '<a target="_blank" href="/news-detail?id='+o._id.toString()+'" title="'+o.name+'">';
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
                $("title").text(res.result.name);
                $("#newsDetail h1").text(res.result.name);
                $("#newsDetail article").hide().html(decodeURI(res.result.desc));
                var imgLen = $("#newsDetail article img").length;
                if(imgLen > 0){
                    $("#newsDetail article img").each(function(key,obj){
                        var thisSrc = $(obj).attr("src");
                        thisSrc = staticPath + thisSrc;
                        $(obj).attr("src",thisSrc);
                    });
                }  
                $("#newsDetail article").show();
            });
        }
    }

    var routerPath = fnbase.getRouterName();
    if(routerPath == "/news-list"){
        newsFun.getAllList();
    }else if(routerPath == "/news-detail"){
        var requestGet = fnbase.GetRequest();
        var urlId = requestGet["id"];
        newsFun.getDetail(urlId);
    }
});