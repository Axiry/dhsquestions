var http = require('http');

var server = http.createServer(function(req, res){
	res.end("Hello World")
});

port = Number(process.env.PORT || 8888)

server.listen(port);
console.log('Server running');