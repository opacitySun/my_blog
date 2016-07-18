
define(['require','jquery','./controller/c-work','./model/m-work'],function(require,$,controller,model){
	$(".works_list .left dd:first").css("display","block");

    $(".content .left dt").click(function(){
        controller.showDDList(this);
    });
});