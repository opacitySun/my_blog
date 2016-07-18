define(['./Base'], function (Base) {
	var cWork = {
		//左侧列表拉伸显示功能
		showDDList : function(obj){
			$(obj).parent().siblings().find("dd").slideUp();
        	$(obj).parent().find("dd").slideDown();
		}
	}

	return cWork;
});