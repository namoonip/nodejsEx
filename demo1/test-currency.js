// lib폴더의 currency 포함시키기
var currency = require('./lib/currency');

var dollars = currency.wonToUS(5000000);
console.log("5백만원:" + dollars + "달러");

var won = currency.USToWon(5000);
console.log("5000달러:" + won + "원");
