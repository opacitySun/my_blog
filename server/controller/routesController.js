/*
 *此文件用于让express关联不同的控制器
 *sun create in 2016.7.19
 */

var index = require("./indexController");
var worksList = require("./worksListController");

module.exports = function(app){
	index(app);
	worksList(app);
}