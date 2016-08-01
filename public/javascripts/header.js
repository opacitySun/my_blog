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
	}else{
		navLiNo = 0;
	}
	$("#header nav li").eq(navLiNo).find("a").addClass("sel");

	var host = window.location.host;
	var protocol = window.location.protocol;
	//设为首页
	function setHome(obj,indexUrl){
		try{
			obj.style.behavior='indexUrl(#default#homepage)';
			obj.setHomePage(indexUrl);
		}catch(e){
			if(window.netscape){
				try{
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				}catch(e){
					alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
				}
			}else{
				alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+protocol+"//"+host+"】设置为首页。");
			}
		}
	}
	$("#setHome").click(function(){
		setHome(this,protocol+"//"+host);
	});

	//收藏本站
	function addFavorite(title, url) {
		try {
			window.external.addFavorite(url, title);
		}
		catch (e) {
			try {
				window.sidebar.addPanel(title, url, "");
			}
			catch (e) {
				alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请进入新网站后使用Ctrl+D进行添加");
			}
		}
	}
	$("#addFavorite").click(function(){
		addFavorite("孙博为的个人站",protocol+"//"+host);
	});
});