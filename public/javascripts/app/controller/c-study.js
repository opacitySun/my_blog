define(['jquery','fnbase','lazyload','../model/m-study'], function ($,fnbase,lazyload,model) {
	var staticPath = $("#staticPath").val();

	var cStudy = {
		//获取全部列表
		getAllList : function(){
            model.getAllList(function(res){
                var html = "";
                if(res.result){
                    $.each(res.result,function(key,obj){
                        html += '<div class="container">';
                        html += '<h3 class="tittle">';
                        html += '<em>'+obj.name+'</em>';
                        html += '<a href="/study-list-second?type='+obj.type+'">更多</a>';
                        html += '</h3>';
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
                                html += '<a href="/study-detail?id='+o._id.toString()+'" class="mask"><img src="/images/study.jpg" alt="image" class="img-responsive zoom-img lazyload"></a>';
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
                $("img.lazyload").lazyload({
                    effect:'fadeIn' //懒加载淡入
                });
            });
        },
        //获取二级全部列表
        getSecondAllList : function(type){
            var formData = {"type":type};
            model.getSecondAllList(formData,function(res){
                var html = "";
                if(res.result){
                    html += '<div class="container">';
                    html += '<h3 class="tittle">'+res.result.name+'</h3>';
                    html += '<div class="news-article">';
                    if(res.result.data){
                        $.each(res.result.data,function(k,o){
                            html += '<div class="col-md-6 article-post">';
                            html += '<div class="col-md-3 post-meta">';
                            html += '<ul class="ad-info">';
                            html += '<li>'+fnbase.getSmpFormatDateByLong(o.updateTime,false)+'</li>';
                            html += '<li><a href="/study-detail?id='+o._id.toString()+'">'+o.author+'</a></li>';
                            html += '</ul>';
                            html += '<div class="clearfix"></div>';
                            html += '</div>';
                            html += '<div class="col-md-9 post-details">';
                            html += '<a href="/study-detail?id='+o._id.toString()+'" class="mask"><img src="/images/study.jpg" alt="image" class="img-responsive zoom-img lazyload"></a>';
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
                }else{
                    html = "暂无数据";
                }
                $("#studySecondAll").html(html);
                $("img.lazyload").lazyload({
                    effect:'fadeIn' //懒加载淡入
                });
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
                $("img").lazyload({
                    effect:'fadeIn' //懒加载淡入
                });
            });
        }
	};

	return cStudy;
});