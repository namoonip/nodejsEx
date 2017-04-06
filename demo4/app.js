var express = require('express');
var path = require('path'); // 파일시스템의 경로와 관련된 기능 제공
var logger = require('morgan');
var bodyParser = require('body-parser');

// express 객체 생성하기
var app = express();

// 뷰템플릿 엔진 설정하기
paa.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// 요청에 대한 로그를 기록하는 미들웨어 등록하기
app.use(logger('dev'));

// 클라이언트가 제출한 폼 입력값을 해석해서 요청객체에 저장하는 미들웨어 등록하기
app.user(bodyParser.urlencoded({extended:true}));