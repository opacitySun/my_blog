define(['jquery','fnbase','./controller/c-fairy','./model/m-fairy'],function($,fnbase,controller,model){
    //判断是否显示精灵
    controller.fairyShow();
    //隐藏显示精灵
    $("#hideBox").on("click",function(){
    	$("#myfairy .top").fadeOut(1000);
    	$("#myfairy .bottom").fadeOut(1000);
    	$("#myfairy .showBtn").show(1000);
    	$("#myfairy").css("width","40px");
    });
    $("#myfairy .showBtn").on("click",function(){
    	$("#myfairy .top").show(1000);
    	$("#myfairy .bottom").show(1000);
    	$("#myfairy .showBtn").hide(1000);

    	var screen_w = $(window).width();
    	if(screen_w >= 800){
    		$("#myfairy").css("width","260px");
    	}else{
    		$("#myfairy").css("width","30%");
    	}
    });
    //自我介绍
    controller.selfTxt();
});