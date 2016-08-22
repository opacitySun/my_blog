define(['require','jquery','movetop','easing'],function(require,$,movetop,easing){
	//返回顶部按钮
	$(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});
	});

	$(document).UItoTop({ easingType: 'easeOutQuart' });
});