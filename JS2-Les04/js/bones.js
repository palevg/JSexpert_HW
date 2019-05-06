let str = "";

function run() {
	let total = 0;
	for (let i = 1; i <= 15; i++) {
		if (i === 8 || i === 13) {continue;}
		const first = getRndNumber(),
					second = getRndNumber();
		setResult("Первая кость: " + first + "; вторая кость: " + second + "<br>");
		isNumbersEqual(first, second);
		isBigDifference(first, second);
		total = setTotal(first, second, total);
	}
	printResult(str);
	total > 100 ? printResult("Победа, вы набрали " + total + " очков") : printResult("Вы проиграли, у вас " + total + " очков");
}

function getRndNumber() {
	return Math.floor((Math.random() * 6) + 1);
}

function setResult(someText) {
	str += someText;
}

function isNumbersEqual(number1, number2) {
	if (number1 === number2) {
		setResult("Выпал дубль. Число " + number1 + "<br>");
	}
}

function isBigDifference(number1, number2) {
	if ((number1 < 3 && number2 > 4) || (number1 > 4 && number2 < 3)) {
		setResult("Большой разброс между костями. Разница составляет " + Math.abs(number2 - number1) + "<br>");
	}
}

function setTotal(number1, number2, number3) {
	return number1 + number2 + number3;
}

function printResult(someText) {
	document.getElementById("result").innerHTML += someText;
}

run();