
define(["jquery","bootstrap","../model/m-fairy"],function($,bootstrap,model){
    var staticPath = $("#staticPath").val();

	var cFairy = {
        //判断是否显示精灵
        fairyShow : function(){
            model.hasFairy(function(resHas){
                if(resHas.success == 1){
                    var id = resHas.result._id.toString();
                    model.getFairyAllInfoById(id,function(res){
                        if(res.success == 1){
                            var typeImage = '<img src="'+staticPath+res.result.image+'" />';
                            $("#myfairy .bottom").html(typeImage);
                            $("#myfairy").show();
                        }else{
                            console.log(res);
                        }
                    });
                }else{
                    console.log(resHas);
                    $("#myfairy").remove();
                }
            });
        }
	};

	return cFairy;
});