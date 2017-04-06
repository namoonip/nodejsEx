// required() 함수는 내장 모듈 혹은 서드파티 모듈을 
// 이 프로그램에서 사용할 수 있도록 포함시킨다.
var mustache = require('mustache');
var template = "Hello, {{firstname}} {{lastname}}";
var message = mustache.render(template, {
	firstname : "윤",	lastname : "현근"
});
console.log(message);