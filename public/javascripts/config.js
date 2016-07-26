
(function(){
    var basePath = document.getElementById("basePath").value;
    require.config({
        baseUrl : basePath+'/javascripts',
        paths : {
            'jquery':'lib/jquery-1.11.3.min',
            'fnbase':'./fnbase',
            'vue':'lib/vue.min'
        },
        map : {
            '*':{
                'css':'lib/require-css.min'
            }
        },
        shim : {
            'fnbase':['css!../stylesheets/lib/base.css']
        }
    });
})();
