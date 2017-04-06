// cmd에서 npm install connect --save
var connect = require('connect');
// connect객체가 알아서 http를 생성한 후 반환한다.
var app = connect();	// connect()함수는 connect객체를 반환한다.

// 커넥터에게 실행될 함수를 알려준다.
app.use(function(req, res, next) {
	var remoteAddr = req.connection.remoteAddress;
	// 가져온 주소를 req에 ip라는 이름으로 담는다.
	req['ip'] = remoteAddr;
	next();
});
app.use(logger);
app.use('/home', function(req, res, next) { });

app.use('/about', function(req, res, next) { });

app.use(hello);

app.listen(3000);	// 3000번 포트에서 웹서버가 구동된다.

// 커넥터(미들웨어스택)가 실행될 때 웹 어플리케이션의 req, res를 넣어준다.
// 미들웨어 함수1 정의하기
// next는 다음 번에 실행되는 함수를 가리킨다.
function logger(req, res, next) {
	console.log('요청 메소드: ' + req.method);
	console.log('요청 URL: ' + req.url);
	// 위에서 ip라는 이름으로 담겨진 req의 값을 적는다.
	console.log('클라이언트 ip: ' + req.ip);
	next(); // 다음 응답을 브라우져가 기다린다.
}

// 미들웨어 함수2 정의하기
function hello(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello!');
}
