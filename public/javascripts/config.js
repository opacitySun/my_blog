
(function(){
    var basePath = document.getElementById("basePath").value;
    require.config({
        baseUrl : basePath+'/javascripts',
        paths : {
            'jquery':'lib/jquery-1.9.1',
            'fnbase':'fnbase'
        },
        map : {
            '*':{
                'css':'lib/require-css.min'
            }
        },
        shim : {
            'fnbase':['css!../css/lib/base.css']
        }
    });
})();
