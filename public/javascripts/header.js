define(['require','jquery','fnbase'],function(require,$,fnbase){
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
});