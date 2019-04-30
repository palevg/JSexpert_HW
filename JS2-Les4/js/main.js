/*	Основное домашнее задание №2: «Камень ножницы бумага»
Цель задания: научиться использовать функции, реализовывать алгоритмы похожие на реальные задачи.
Названия всех функций даны для справки. Вы можете придумать свои.

Заготовка для ДЗ (Архив с заготовкой): https://www.jsexpert.net/wp-content/uploads/2017/12/homeWork_13.zip

Условие.
У вас есть 2 игрока которые играют в игру. У каждого может выпасть камень, ножницы или бумага.
На самом деле у вас есть функция (getPlayerResult) которая возвращает случайные числа от 1 до 3
1 — камень
2 — ножницы
3 — бумага
В заготовке реализован следующий функционал.
По нажатии на кнопку получаем случайное число и выводим его в соответствующий div элемент.

1. Вместо того чтоб выводить на экран случайное число как в примере вам необходимо добавить функцию (getNameById),
которая будет принимать это число и возвращать слово «камень», «ножницы», или «бумага», согласно словарю указанному выше.

2. На экран вывести полученную текстовую строку для каждого из игроков.

3. Написать функцию (determineWinner), которая будет принимать два числа,
предварительно полученные в функции getPlayerResult и принимать решение, кто из игроков выиграл.

4. Результатом выполнения функции determineWinner должно быть число, номер игрока, который выиграл.
То есть эта функция должна возвращать номер игрока который выиграл

5. Функция printResult должна принять номер игрока, который выиграл и напечатать в div Id result
текстовое сообщение типа: «выиграл первый игрок» номер игрока надо вывести словами.*/

const btn = document.getElementById("play"),
			player1 = document.getElementById("player1"),
			player2 = document.getElementById("player2"),
			gameResult = document.getElementById("result"),
			goods = ["камень", "ножницы", "бумага"];

function getPlayerResult() {
	return Math.floor((Math.random() * 3) + 1);
}

function getNameById(goodNumber) {
	return goods[goodNumber - 1];
}

function determineWinner(number1, number2) {
	let result = 0;
	if (number2 - number1 > 0) {
		number2 - number1 === 1 ? result = 1 : result = 2;
	}
	if (number1 - number2 > 0) {
		number1 - number2 === 1 ? result = 2 : result = 1;
	}
	return result;
}

function printResult(winner) {
	let str;
	if (winner === 0) {
		str = "Ничья! Попробуйте ещё раз.";
	} else {
		str = "Выиграл ";
		winner === 1 ? str += "первый" : str += "второй";
		str += " игрок.";
	}
	gameResult.innerHTML = str;
}

function runGame() {
	const resultPlayer1 = getPlayerResult(),
				resultPlayer2 = getPlayerResult();
	player1.innerHTML = getNameById(resultPlayer1);
	player2.innerHTML = getNameById(resultPlayer2);
	printResult(determineWinner(resultPlayer1, resultPlayer2));
}

btn.addEventListener("click", runGame);