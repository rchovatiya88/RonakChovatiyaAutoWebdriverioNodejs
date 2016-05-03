/*
Webdriver.io with seleniumwebdriver 
*/


var Webdriverio = require('Webdriverio');
var browser = { desiredCapabilites: { browserName: 'chrome'}};


client
	.init()
	.url('http://www.google.com')
	.getTitle().then(function(title){
		console.log('title is:' + title);
	})
	.end();
	
