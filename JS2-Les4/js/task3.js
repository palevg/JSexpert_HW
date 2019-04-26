/*3. Напишите функцию, определяющую, является ли данный год високосным по григорианскому календарю.
Функция должна принимать число и выводить true если год является високосным и false если не високосным.
Функция должна содержать проверку полученного аргумента на число, если полученный аргумент не число,
выполнять преобразование к числу, иначе выводить сообщение об ошибке.
Математическую формулу можно вывести прочитав статью на википедии:
https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%81%D0%BE%D0%BA%D0%BE%D1%81%D0%BD%D1%8B%D0%B9_%D0%B3%D0%BE%D0%B4
Можете воспользоваться заготовкой: https://plnkr.co/edit/zvUYtR8kQLeT2cH7QSEC?p=preview
*/

'use strict';

function isLeapYear (testYear) {
	let result = "Рік " + testYear + " є ";
	if (isNaN(testYear)) {
		result = "Error - year is not found";
	}
	else {
		testYear % 400 == 0 ? result += "високосним" : testYear % 100 == 0 ? result += "невисокосним" : testYear % 4 == 0 ? result += "високосним" : result += "невисокосним";
	}
	return result;
}

console.log(isLeapYear(1600));  //true
console.log(isLeapYear(2100));  //false
console.log(isLeapYear(2012)); //true
console.log(isLeapYear());    //Error - year is not found