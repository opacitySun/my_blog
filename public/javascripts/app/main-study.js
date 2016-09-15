
define(['jquery','fnbase','./controller/c-study','./model/m-study'],function($,fnbase,controller,model){
    var routerPath = fnbase.getRouterName();
    if(routerPath == "/study-list"){
        controller.getAllList();
    }else if(routerPath == "/study-list-second"){
        var requestGet = fnbase.GetRequest();
        var type = requestGet["type"];
        controller.getSecondAllList(type);
    }else if(routerPath == "/study-detail"){
        var requestGet = fnbase.GetRequest();
        var urlId = requestGet["id"];
        controller.getDetail(urlId);
    }
});