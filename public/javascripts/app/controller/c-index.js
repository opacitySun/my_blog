
define(["./Base","flexisel"],function(Base,flexisel){
	var cIndex = {
		flexisel : function(){
			$("#userWorks").flexisel({
                visibleItems:4,
                animationSpeed: 1000,
                autoPlay: true,
                autoPlaySpeed: 3000,            
                pauseOnHover: false,
                enableResponsiveBreakpoints: true,
                responsiveBreakpoints: { 
                    portrait: { 
                        changePoint:480,
                        visibleItems:3
                    }, 
                    landscape: { 
                        changePoint:640,
                        visibleItems:3
                    },
                    tablet: { 
                        changePoint:768,
                        visibleItems:3
                    }
                }
            });
		}
	};

	return cIndex;
});