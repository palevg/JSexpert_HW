/*	ИНСТРУКЦИЯ ПО ВЫПОЛНЕНИЮ ДОМАШНЕГО ЗАДАНИЯ
Основное домашнее задание №1:
Цель задания: научиться базовым приемам работы с функциями.
Названия всех функций даны для справки. Вы можете придумать свои.
Все то что было реализовано в прошлом задании необходимо перевести на работу с функциями.

1. Создать главную самозапускающуюся функцию run() в которой будет выполняться основной код (цикл)
Также эта функция должна содержать в себе вызовы всех остальных функций.

2. Сделать функцию для получения случайных чисел (getRndNumber).
Значение каждой переменной, в которую мы записываем, какая выпала кость получать с помощью вызова этой функции

3. Сделать одну функцию которая будет склеивать все строки в одну (setResult). Она должна принимать только один аргумент. Строку текста, которую надо склеить.
(если вы выводите данные не только в div с id result, а возможно еще в какой то другой div, тогда функция должна принимать 2 аргумента: id и Строку)

4. Сделать функцию для определения совпадений. (isNumbersEqual).
Она должна содержать в себе проверку на совпадение и внутри себя вызывать функцию для сохранения данных в общую строку (setResult).

5. Сделать функцию для определения разницы. (isBigDifference).
Она должна содержать в себе соответствующую проверку и внутри себя вызывать функцию для сохранения данных в общую строку (setResult).

6. Сделать функцию для вычисления результата total. Функция должна вычислять результат и сохранять его в переменную total.

7. Сделать функцию, которая напечатает полученные с помощью функции setResult данные в HTML (printResult).*/

let str = "";

function run() {
	let total = 0;
	for (var i = 1; i <= 15; i++) {
		if (i == 8 || i == 13) {continue;}
		var first = getRndNumber();
		var second = getRndNumber();
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
	if (number1 == number2) {
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