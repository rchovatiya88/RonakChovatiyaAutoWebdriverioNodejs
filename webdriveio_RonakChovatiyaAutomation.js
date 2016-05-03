/*
Webdriver.io with seleniumwebdriver 
*/


var Webdriverio = require('Webdriverio');
var options = { desiredCapabilites: { browserName: 'chrome'}};
var client = Webdriverio.remote(options);

client
	.init()
	.url('http://www.google.com')
	.getTitle().then(function(title){
		console.log('title is:' + title);
	})
	.end();
	