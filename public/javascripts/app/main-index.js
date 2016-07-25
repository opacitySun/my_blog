
define(['require','jquery','./controller/c-index','./model/m-index'],function(require,$,controller,model){
    $(".content_2 section dl:last").css("margin","0");

    model.getUserInfo(function(res){
    	$("#peopleImg").attr("src",res[0].result.image);
    	$("#peopleName").text(res[0].result.name);
    });
});