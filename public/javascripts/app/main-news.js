define(['jquery','fnbase','./controller/c-news','./model/m-news'],function($,fnbase,controller,model){
    var routerPath = fnbase.getRouterName();
    if(routerPath == "/news-list"){
        controller.getAllList();
    }else if(routerPath == "/news-detail"){
        var requestGet = fnbase.GetRequest();
        var urlId = requestGet["id"];
        controller.getDetail(urlId);
    }
});