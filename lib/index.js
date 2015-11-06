'use strict';

var _mathModule = require('./math-module');

var _mathModule2 = _interopRequireDefault(_mathModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calculate = function calculate(x, y) {
	return x + y + 1;
};

console.log(calculate(2, 3));
console.log(_mathModule2.default);