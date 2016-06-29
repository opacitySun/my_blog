

$(document).ready(function(){
    $("header nav ul li:first").css("border-left","0");
    $("header nav ul li:last").css("border-right","0");
});


Public = {
    //检测数组中是否存在该元素
    inArray : function(value,arr){
        if (arr.indexOf(value) > -1)
            return true;
        return false;
    },

    //返回页面顶部
    backTop : function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    }
}
