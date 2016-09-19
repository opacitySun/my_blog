define(['jquery','fnbase','lazyload','../model/m-news'], function ($,fnbase,lazyload,model) {
	var staticPath = $("#staticPath").val();

	var cNews = {
		//获取全部列表
		getAllList : function(){
            model.getAllList(function(res){
                var html = "";
                if(res.result){
                    $.each(res.result,function(key,obj){
                        html += '<div class="container">';
                        html += '<h3 class="tittle">';
                        html += '<em>'+obj.name+'</em>';
                        html += '<a href="/news-list-second?type='+obj.type+'">更多</a>';
                        html += '</h3>';
                        html += '<div class="news-article">';
                        if(obj.data){
                            $.each(obj.data,function(k,o){
                            	var oDesc = decodeURI(o.desc);
                            	var oImgArr = oDesc.match(/<img[^>]+>/gi);
                            	if(oImgArr != null){
                            		var oImg = oImgArr[0];
	                            	var thisImg = oImg.replace('<img','<img class="img-responsive zoom-img lazyload"');
	                            	thisImg = thisImg.replace('src="','src="'+staticPath);
                            	}else{
                            		var thisImg = '<img src="/images/news.jpg" alt="图片" class="img-responsive zoom-img lazyload">';
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
                                html += '<a href="/news-detail?id='+o._id.toString()+'" title="'+o.name+'"><h4>'+o.name+'</h4></a>';
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
                $("img.lazyload").lazyload({
                    effect:'fadeIn' //懒加载淡入
                });
            });
        },
        //二级列表数据初始化及下拉刷新
        initSecondList : function(type){
            var currentPage = 1;
            var pageSize = 4;
            cNews.getSecondList(currentPage,pageSize,type);

            //滚动刷新列表数据
            var finished = true;
            window.onscroll = function () {
                if (fnbase.getScrollTop() + fnbase.getClientHeight() == fnbase.getScrollHeight()) {
                    var count = $("#dataCount").val();
                    if(finished == true && count != 'null' && (currentPage*pageSize) < Number(count)){
                        $("#loadPrompt").show();
                        finished = false;
                        setTimeout(function(){
                            $("#loadPrompt").hide();
                            currentPage = parseInt(currentPage)+1;
                            cNews.getSecondList(currentPage,pageSize,type);
                            finished = true;
                        },1000);
                    }
                }
            }
        },
        //获取二级全部列表
		getSecondList : function(currentPage,pageSize,type){
			var formData = {
                "currentPage":currentPage,
                "pageSize":pageSize,
                "type":type
            };
            model.getSecondList(formData,function(res){
                var html = "";
                if(res.result){
                	if(currentPage == 1){
                		html += '<div class="container">';
	                    html += '<h3 class="tittle">'+res.result.name+'</h3>';
	                    html += '<div class="news-article" id="secondList">';
                	}   
                    if(res.result.data){
                        $.each(res.result.data,function(k,o){
                        	var oDesc = decodeURI(o.desc);
                        	var oImgArr = oDesc.match(/<img[^>]+>/gi);
                        	if(oImgArr != null){
                        		var oImg = oImgArr[0];
                            	var thisImg = oImg.replace('<img','<img class="img-responsive zoom-img lazyload"');
                            	thisImg = thisImg.replace('src="','src="'+staticPath);
                        	}else{
                        		var thisImg = '<img src="/images/news.jpg" alt="图片" class="img-responsive zoom-img lazyload">';
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
                            html += '<a href="/news-detail?id='+o._id.toString()+'" title="'+o.name+'"><h4>'+o.name+'</h4></a>';
                            html += '<p>'+thisDesc+'</p>';
                            html += '<div class="read two">';
                            html += '<a class="button" href="/news-detail?id='+o._id.toString()+'"><img src="/images/read.png" /></a>';
                            html += '</div>';
                            html += '</div>';
                            html += '<div class="clearfix"></div>';
                            html += '</div>';
                        });
                    }
                    if(currentPage == 1){
                    	html += '<div class="clearfix"></div>';
	                    html += '</div>';
	                    html += '</div>';
                    }   
                }else{
                    if(currentPage == 1){
                        html = "暂无数据";
                    }
                }
                if(currentPage == 1){
                    $("#newsSecondAll").html(html);
                    if(res.total > 0){
                        $("#dataCount").val(res.total);
                    }
                }else{
                    $("#secondList").append(html);
                }
                $("img.lazyload").lazyload({
                    effect:'fadeIn' //懒加载淡入
                });
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
                $("img").lazyload({
                    effect:'fadeIn' //懒加载淡入
                });
            });
        }
	};

	return cNews;
});