
define(['require','jquery','fnbase','./controller/c-study','./model/m-study'],function(require,$,fnbase,controller,model){
    var studyFun = {
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
                                html += '<a target="_blank" href="/study-detail?id='+o._id.toString()+'" title="'+o.name+'">';
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
                $("#studyAll").html(html);
            });
        },
        getDetail : function(id){
            model.getDetail(id,function(res){
                $("title").text(res.result.name);
                $("#studyDetail h1").text(res.result.name);
                $("#studyDetail article").text(res.result.article);
            });
        }
    };

    var routerPath = fnbase.getRouterName();
    if(routerPath == "/study-list"){
        studyFun.getAllList();
    }else if(routerPath == "/study-detail"){
        var requestGet = fnbase.GetRequest();
        var urlId = requestGet["id"];
        studyFun.getDetail(urlId);
    }
});