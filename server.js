var http = require('http');

var server = http.createServer(function(req, res){
	res.end("Hello World")
});

server.listen('8888');
console.log('Server running on Port 8888')