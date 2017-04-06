// 환율 계산기
var exchangeRate = 1117.9;
function wonToUS(won) {
	return won/exchangeRate;
}
function USToWon(us) {
	return us*exchangeRate;
}
// 함수 노출시키기
exports['wonToUS'] = wonToUS;
exports['USToWon'] = USToWon;
