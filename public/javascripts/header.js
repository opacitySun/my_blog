define(['require','jquery','fnbase','movetop','easing'],function(require,$,fnbase,movetop,easing){
	//设置菜单选中状态
	var url = window.location.href;
	var navLiNo = 0;
	if(fnbase.inString("works",url)){
		navLiNo = 1;
	}else if(fnbase.inString("study",url)){
		navLiNo = 2;
	}else if(fnbase.inString("recreation",url)){
		navLiNo = 3;
	}else if(fnbase.inString("news",url)){
		navLiNo = 4;
	}else if(fnbase.inString("me",url)){
		navLiNo = 5;
	}else{
		navLiNo = 0;
	}
	$("#header .nav1 li").eq(navLiNo).find("a").addClass("active");

	//script for menu
	$("#header span.menu" ).click(function() {
		$( "ul.nav1" ).slideToggle( 300, function() {
		 // Animation complete.
		});
	});

	//返回顶部按钮
	$(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});
	});
});