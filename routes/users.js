var http = require('http'),
	url = require('url');
var express = require('express');
var router = express.Router();

exports.router = function(req,res,pathname){
	switch(pathname){
		case "/parse":
			parseDns.parseDns(req,res);
			break;
		default:
			mainIndex.goIndex(req,res);
	}
}
