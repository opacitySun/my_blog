define(['require','jquery','fnbase','./controller/c-me','./model/m-me'],
function(require,$,fnbase,controller,model){
    var staticPath = $("#staticPath").val();

    //获取用户信息
    model.getUserInfo(function(res){
    	$("#peopleImg").attr("src",staticPath+res.result[0].image);
    	$("#peopleName").text(res.result[0].name);
    	$("#peopleDesc").html(res.result[0].desc);
    });
});