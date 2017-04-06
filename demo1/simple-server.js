// http 모듈을 사용해 간단한 응답을 제공하는 웹 애플리케이션

// http 모듈은 node의 내장 모듈
// http 요청과 응답을 처리하는 간단한 웹서버를 제작할 수 있다.
var  http = require('http');

http.createServer(function(req, res) {
	console.log("요청 URL: " + req.url);

	var path = req.url;

	switch(path) {
		case '/' :
			res.writeHead(200, {'Content-Type' : 'text/plain'});
			res.end('Welcome to Home');
			break;
		case '/about' :
			res.writeHead(200, {'Content-Type' : 'text/plain'});
			res.end('Welcome to About Page');
			break;
		default:
			res.writeHead(404, {'Content-Type' : 'text/plain'});
			res.end('404 - Not Found');
	}
}).listen(3000);
// cmd에서 Ctrl + C 를 누르면 서버가 꺼진다.

