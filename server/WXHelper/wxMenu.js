var API = require('wechat-api');
var config = {
	"domain": "www.sunbowei.com",
	"wx": {
		"app_id": "wx69a406a1b3ddb9f4",
		"app_secret": "d00dd83863cab10b3c9562cb96e77f39",
		"wx_menu": {
			"button": [
				{
					"name": "个人定制",
					"sub_button": [
						{
						  "type": "view",
						  "name": "JavaScript",
						  "url": "http://www.baidu.com/"
						},
						{
						  "type": "view",
						  "name": "CSS",
						  "url": "http://www.baidu.com/"
						},
						{
						  "type": "click",
						  "name": "我的网站",
						  "url": "http://www.sunbowei.com/"
						}
					]
				},
				{
					"type": "view",  
					"name": "我的关注",  
					"url": "http://www.baidu.com/"  
				}
			]
		}
	}
};

/**  
 * 创建菜单
 * @returns {Function}  
 */ 
exports.createMenu = function(){
	var menu_config = config.wx.wx_menu;
	var app_id      = config.wx.app_id;
	var app_secret  = config.wx.app_secret;

	var api = new API(app_id, app_secret);

	api.createMenu(menu_config, function(err, result){
	    console.log(result);
	});
}