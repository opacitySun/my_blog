define(['jquery','fnbase','./controller/c-fairy','./model/m-fairy'],function($,fnbase,controller,model){
    //判断是否显示精灵
    controller.fairyShow();
    //隐藏显示精灵
    $("#hideBox").on("click",function(){
    	$("#myfairy .top").fadeOut();
    	$("#myfairy .bottom").fadeOut();
    	$("#myfairy .showBtn").show();
    	$("#myfairy").css("width","40px");
    });
    $("#myfairy .showBtn").on("click",function(){
    	$("#myfairy .top").show();
    	$("#myfairy .bottom").show();
    	$("#myfairy .showBtn").hide();

    	var screen_w = $(window).width();
    	if(screen_w >= 800){
    		$("#myfairy").css("width","260px");
    	}else{
    		$("#myfairy").css("width","30%");
    	}
    });
});