
define(["jquery","bootstrap","../model/m-fairy"],function($,bootstrap,model){
    var staticPath = $("#staticPath").val();

	var cFairy = {
        //获取作品列表
        getWorksList : function(){
            model.getUserWorks(function(res){
                var html = "";
                if(res.result){
                    $.each(res.result,function(key,obj){
                        html += '<li>';
                        html += '<div class="biseller-column">';
                        html += '<a class="lightbox" target="_blank" href="'+obj.workUrl+'" title="'+obj.workName+'">';
                        html += '<img src="'+staticPath+obj.workImg+'" alt="'+obj.workName+'" />';
                        html += '</a>';
                        html += '</div>';
                        html += '</li>';
                    });
                }
                $("#userWorks").html(html);
                cIndex.flexisel();
            });
        },
        //判断是否显示精灵
        fairyShow : function(){
            model.hasFairy(function(resHas){
                if(resHas.success == 1){
                    var id = resHas.result._id.toString();
                    model.getFairyAllInfoById(id,function(res){
                        if(res.success == 1){
                            var typeImage = '<img src="'+res.result.image+'" />';
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