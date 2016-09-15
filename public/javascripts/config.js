
(function(){
    var basePath = document.getElementById("basePath").value;
    require.config({
        baseUrl : basePath+'/javascripts',
        paths : {
            'jquery':'lib/jquery-1.11.3.min',
            'fnbase':'lib/fnbase',
            'vue':'lib/vue.min',
            'easing':'lib/easing',
            'flexisel':'lib/jquery.flexisel',
            'hoverdir':'lib/jquery.hoverdir',
            'movetop':'lib/move-top',
            'modernizr':'lib/modernizr',
            'lazyload':'lib/jquery.lazyload.min',
            'bootstrap':'../loginTemplet/bootstrap/js/bootstrap.min'
        },
        map : {
            '*':{
                'css':'lib/require-css.min'
            }
        },
        shim : {
            //'fnbase':['css!../stylesheets/lib/base.css']
            //声明依赖
            'flexisel':{
                deps:['jquery'],
                exports:'flexisel'
            },
            'hoverdir':{
                deps:['jquery','modernizr'],
                exports:'hoverdir'
            },
            'lazyload':{
                deps:['jquery'],
                exports:'lazyload'
            },
            'bootstrap':{
                deps:['jquery'],
                exports:'bootstrap'
            }
        }
    });
})();
