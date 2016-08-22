define(['./Base','hoverdir'], function (Base,hoverdir) {
	var cWork = {
		jqHoverdir : function(){
			$('#worksList > li').each( function() { $(this).hoverdir(); } );
		},
		//菜单按钮
		menuButton : function(){
			$("#menuButton a").on("click",function(){
				$(this).parent().find("a").removeClass("current");
				$(this).addClass("current");
			});
		}
	};

	return cWork;
});