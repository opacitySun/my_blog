define(['jquery','fnbase','../model/m-study'], function ($,fnbase,model) {
	var staticPath = $("#staticPath").val();

	var cStudy = {
		//获取全部列表
		getAllList : function(){
            model.getAllList(function(res){
                var html = "";
                if(res.result){
                    $.each(res.result,function(key,obj){
                        html += '<div class="container">';
                        html += '<h3 class="tittle">'+obj.name+'</h3>';
                        html += '<div class="news-article">';
                        if(obj.data){
                            $.each(obj.data,function(k,o){
                                html += '<div class="col-md-6 article-post">';
                                html += '<div class="col-md-3 post-meta">';
                                html += '<ul class="ad-info">';
                                html += '<li>'+fnbase.getSmpFormatDateByLong(o.updateTime,false)+'</li>';
                                html += '<li><a href="/study-detail?id='+o._id.toString()+'">'+o.author+'</a></li>';
                                html += '</ul>';
                                html += '<div class="clearfix"></div>';
                                html += '</div>';
                                html += '<div class="col-md-9 post-details">';
                                html += '<a href="/study-detail?id='+o._id.toString()+'" class="mask"><img src="/images/banner.jpg" alt="image" class="img-responsive zoom-img"></a>';
                                html += '<a href="/study-detail?id='+o._id.toString()+'"><h4>'+o.name+'</h4></a>';
                                //html += '<p></p>';
                                html += '<div class="read two">';
                                html += '<a class="button" href="/study-detail?id='+o._id.toString()+'"><img src="/images/read.png" /></a>';
                                html += '</div>';
                                html += '</div>';
                                html += '<div class="clearfix"></div>';
                                html += '</div>';
                            });
                        }
                        html += '<div class="clearfix"></div>';
                        html += '</div>';
                        html += '</div>';
                    });
                }else{
                    html = "暂无数据";
                }
                $("#studyAll").html(html);
            });
        },
        //获取详情
        getDetail : function(id){
            model.getDetail(id,function(res){
                $("title").text(res.result.name);
                $("#studyDetail h3.tittle").text(res.result.name);
                $("#studyDetail article").hide().html(decodeURI(res.result.article));
                var imgLen = $("#studyDetail article img").length;
                if(imgLen > 0){
                    $("#studyDetail article img").each(function(key,obj){
                        var thisSrc = $(obj).attr("src");
                        thisSrc = staticPath + thisSrc;
                        $(obj).attr("src",thisSrc);
                    });
                }
                $("#studyDetail article").show();
            });
        }
	};

	return cStudy;
});