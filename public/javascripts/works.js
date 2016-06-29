
$(document).ready(function(){
    $(".works_list .left dd:first").css("display","block");
});

Works = {
    //左侧列表拉伸显示功能
    showDDList : function(obj){
        $(obj).parent().siblings().find("dd").slideUp();
        $(obj).parent().find("dd").slideDown();
    }
}
