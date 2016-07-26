
define(['require','jquery'],function(require,$){
	var html = "";
	html += '<div class="header_top">';
	html += '	<div class="top_center">';
	html += '		<div class="logo">SUN</div>';
	html += '		<ul>';
	html += '		<li><a href="" title="设为首页">设为首页</a></li>';
	html += '		<span>|</span>';
	html += '		<li><a href="" title="收藏本站">收藏本站</a></li>';
	html += '		</ul>';
	html += '	</div>';
	html += '</div>';
	html += '<nav>';
	html += '	<ul>';
	html += '		<li><a href="/" title="网站首页">网站首页</a></li>';
	html += '		<li><a href="/works-list" title="我的作品">我的作品</a></li>';
	html += '		<li><a href="" title="学习分享">学习分享</a></li>';
	html += '		<li><a href="" title="我的娱乐">我的娱乐</a></li>';
	html += '		<li><a href="" title="消息新闻">消息新闻</a></li>';
	html += '	</ul>';
	html += '</nav>';
	$("#header").html(html);

	var host = window.location.host;
	var hostLen = host.length;
	var protocol = window.location.protocol;
	var protocolLen = protocol.length;
	var url = window.location.href;
	var pathName = url.substring(hostLen+protocolLen+3);
	var navLiNo = 0;
	switch(pathName){
		case 'works-list':
			navLiNo = 1;
			break;
		default:
			navLiNo = 0;
	}
	$("#header nav li").eq(navLiNo).addClass("sel");
});