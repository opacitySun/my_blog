
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
        }
	};

	return cIndex;
});