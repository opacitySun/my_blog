define(['jquery','fnbase','./controller/c-fairy','./model/m-fairy'],function($,fnbase,controller,model){
    //判断是否存在精灵
    controller.fairyHas();
    //根据精灵显示状态设置是否显示
    controller.fairyShowStatus();
    //隐藏显示精灵
    $("#hideBox").on("click",function(){
    	controller.fairyHide();
    });
    $("#myfairy .showBtn").on("click",function(){
    	controller.fairyShow();
    });
    //自我介绍
    controller.selfTxt();
});