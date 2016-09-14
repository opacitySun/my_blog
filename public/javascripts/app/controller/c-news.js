define(['jquery','fnbase','../model/m-news'], function ($,fnbase,model) {
	var staticPath = $("#staticPath").val();

	var cNews = {
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
                            	var oDesc = decodeURI(o.desc);
                            	var oImgArr = oDesc.match(/<img[^>]+>/gi);
                            	if(oImgArr != null){
                            		var oImg = oImgArr[0];
	                            	var thisImg = oImg.replace('<img','<img class="img-responsive zoom-img"');
	                            	thisImg = thisImg.replace('src="','src="'+staticPath);
                            	}else{
                            		var thisImg = '<img src="/images/news.jpg" alt="图片" class="img-responsive zoom-img">';
                            	}	
                            	var thisDesc = oDesc.replace(/<img[^>]+>/gi,"");
                            	thisDesc = thisDesc.replace(/<\/?.+?>/g,"");
                            	thisDesc = thisDesc.replace(/&nbsp;/g,"");
                            	thisDesc = fnbase.overTxtEllipsis(thisDesc,60,true);
                                html += '<div class="col-md-6 article-post">';
                                html += '<div class="col-md-3 post-meta">';
                                html += '<ul class="ad-info">';
                                html += '<li>'+fnbase.getSmpFormatDateByLong(o.updateTime,false)+'</li>';
                                html += '</ul>';
                                html += '<div class="clearfix"></div>';
                                html += '</div>';
                                html += '<div class="col-md-9 post-details">';
                                html += '<a href="/news-detail?id='+o._id.toString()+'" class="mask">'+thisImg+'</a>';
                                html += '<a href="/news-detail?id='+o._id.toString()+'"><h4>'+o.name+'</h4></a>';
                                html += '<p>'+thisDesc+'</p>';
                                html += '<div class="read two">';
                                html += '<a class="button" href="/news-detail?id='+o._id.toString()+'"><img src="/images/read.png" /></a>';
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
                $("#newsAll").html(html);
            });
        },
        //获取详情
        getDetail : function(id){
            model.getDetail(id,function(res){
                $("title").text(res.result.name);
                $("#newsDetail h3.tittle").text(res.result.name);
                $("#newsDetail article").hide().html(decodeURI(res.result.desc));
                var imgLen = $("#newsDetail article img").length;
                if(imgLen > 0){
                    $("#newsDetail article img").each(function(key,obj){
                        var thisSrc = $(obj).attr("src");
                        thisSrc = staticPath + thisSrc;
                        $(obj).attr("src",thisSrc);
                    });
                }  
                $("#newsDetail article").show();
            });
        }
	};

	return cNews;
});