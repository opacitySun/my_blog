
define(["jquery","bootstrap","flexisel","../model/m-index"],function($,bootstrap,flexisel,model){
    var staticPath = $("#staticPath").val();

	var cIndex = {
		flexisel : function(){
			$("#userWorks").flexisel({
                visibleItems:4,
                animationSpeed: 1000,
                autoPlay: true,
                autoPlaySpeed: 3000,            
                pauseOnHover: false,
                enableResponsiveBreakpoints: true,
                responsiveBreakpoints: { 
                    portrait: { 
                        changePoint:480,
                        visibleItems:3
                    }, 
                    landscape: { 
                        changePoint:640,
                        visibleItems:3
                    },
                    tablet: { 
                        changePoint:768,
                        visibleItems:3
                    }
                }
            });
		},
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
        //判断是否显示选择精灵弹出窗
        fairyModal : function(){
            model.hasFairy(function(resHas){
                if(resHas.success != 1){
                    model.getFairyTypeList(function(res){
                        if(res.success == 1){
                            var html = "";
                            $.each(res.result,function(key,obj){
                                html += '<li>';
                                html += '<input type="checkbox" name="type" value="'+obj.type+'" />';
                                html += '<img src="'+staticPath+obj.image+'" />';
                                html += '</li>';
                            });
                            $("#fairyListByModal").html(html);
                            cIndex.selFairy();
                            $("#selFairyModal").modal("show");
                        }else{
                            console.log(res);
                        }   
                    });
                }
            });
        },
        //精灵选中效果
        selFairy : function(){
            $("#fairyListByModal li").on("click",function(){
                $(this).find("input[type='checkbox']").attr("checked",true);
                $(this).siblings().find("input[type='checkbox']").attr("checked",false);
                $(this).addClass("current").siblings().removeClass("current");
            });
        }
	};

	return cIndex;
});