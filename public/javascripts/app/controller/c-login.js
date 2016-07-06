
define(['./Base'], function (Base) {
    var cLogin = {
        //重置登陆框
        loginReset : function(){
            $("#login_name").val("");
            $("#login_pwd").val("");
        },
        //关闭登陆框
        loginClose : function(){
            $("#login_dialog").fadeOut();
            $("#login_box").fadeIn();
        },
        //打开登陆框
        loginOpen : function(){
            $("#login_box").fadeOut();
            $("#login_dialog").fadeIn();
        },
        //底部位置调整
        bottomPosition : function(){
            var screen_h = $(window).height();
            var doc_h = $("body,html").height();
            if(screen_h > doc_h){
                $(".login_footer").css({
                    "float":"none",
                    "position":"fixed",
                    "left":0,
                    "bottom":0
                });
            }else{
                $(".login_footer").css({
                    "float":"left",
                    "position":"static",
                    "margin-top":"6px"
                });
            }
        },
        //内容部分高度调整
        contentHeight : function(){
            var screen_h = $(window).height();
            var main_h = screen_h - 117;
            $(".login").height(main_h);
        },
        //输入框默认字设置
        defaultText : function(){
            $("#login_name").focus(function(){
                var txt_value = $(this).val();
                if(txt_value=="Username"){
                    $(this).val("");
                }
            }).blur(function(){
                var txt_value = $(this).val();
                if(txt_value==""){
                    $(this).val("Username");
                }
            });

            $("#login_pwd").focus(function(){
                var txt_value = $(this).val();
                if(txt_value=="Password"){
                    $(this).val("");
                }
            }).blur(function(){
                var txt_value = $(this).val();
                if(txt_value==""){
                    $(this).val("Password");
                }
            });
        }
    };

    return cLogin;
});