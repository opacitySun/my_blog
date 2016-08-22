define(['./Base','hoverdir'], function (Base,hoverdir) {
	var cWork = {
		jqHoverdir : function(){
			$('#worksList > li').each( function() { $(this).hoverdir(); } );
		}
	};

	return cWork;
});