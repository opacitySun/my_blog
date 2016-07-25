
define(['require','jquery','./controller/c-index','./model/m-index'],function(require,$,controller,model){
    $(".content_2 section dl:last").css("margin","0");

    model.getUserInfo(function(res){
    	$("#peopleImg").attr("src",res.result[0].image);
    	$("#peopleName").text(res.result[0].name);
    	$("#peopleDesc").text(res.result[0].desc);
    });
});