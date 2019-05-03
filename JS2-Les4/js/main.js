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