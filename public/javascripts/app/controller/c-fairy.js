
define(["jquery","bootstrap","../model/m-fairy"],function($,bootstrap,model){
    var staticPath = $("#staticPath").val();

	var cFairy = {
        //判断是否存在精灵
        fairyHas : function(){
            model.hasFairy(function(resHas){
                if(resHas.success == 1){
                    var id = resHas.result._id.toString();
                    model.getFairyAllInfoById(id,function(res){
                        if(res.success == 1){
                            var fairyBottom = '';
                            fairyBottom += '<div class="level">';
                            fairyBottom += '<p>LV.'+res.result.level+'</p>';
                            fairyBottom += '<div class="exp" id="exp">';
                            fairyBottom += '<b></b>';
                            fairyBottom += '<em>'+res.result.exp+'/'+res.result.nextExp+'</em>';
                            fairyBottom += '</div>';
                            fairyBottom += '</div>';
                            fairyBottom += '<img src="'+staticPath+res.result.image+'" />';
                            $("#myfairy .bottom").html(fairyBottom);

                            //设置经验值
                            var expPercent = res.result.exp/res.result.nextExp;
                            var expWidth = 0;
                            var screen_w = $(window).width();
                            if(screen_w >= 800){
                                expWidth = 260;
                            }else{
                                expWidth = $("#exp").width();
                            }
                            var bgWidth = expPercent * expWidth;
                            $("#exp b").animate({"width":bgWidth+"px"});

                            $("#myfairy .txtBox p").html(res.result.desc);
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
        },
        //显示精灵
        fairyShow : function(){
            $("#myfairy .top").show();
            $("#myfairy .bottom").show();
            $("#myfairy .showBtn").hide();

            var screen_w = $(window).width();
            if(screen_w >= 800){
                $("#myfairy").css("width","260px");
            }else{
                $("#myfairy").css("width","30%");
            }
            window.onresize = function(){
                var screen_w = $(window).width();
                if(screen_w >= 800){
                    $("#myfairy").css("width","260px");
                }else{
                    $("#myfairy").css("width","30%");
                }
            }
            localStorage.setItem('fairyShowStatus',1);
        },
        //隐藏精灵
        fairyHide : function(){
            $("#myfairy .top").hide();
            $("#myfairy .bottom").hide();
            $("#myfairy .showBtn").show();
            $("#myfairy").css("width","40px");
            localStorage.setItem('fairyShowStatus',0);
        },
        //根据精灵显示状态设置是否显示
        fairyShowStatus : function(){
            var status = localStorage.getItem('fairyShowStatus');   //0为不显示，1为显示
            if(status == 0){
                cFairy.fairyHide();
            }else{
                cFairy.fairyShow();
            }
        },
        //自我介绍
        selfTxt : function(){
            $("#selfTxt").on("click",function(){
                $("#myfairy .panel").hide();
                $("#myfairy .txtBox").show();
            });
            $("#fairyBack").on("click",function(){
                $("#myfairy .txtBox").hide();
                $("#myfairy .panel").show();
            });
        },
        //签到
        skill : function(){
            model.skill(function(res){

            });
        }
	};

	return cFairy;
});