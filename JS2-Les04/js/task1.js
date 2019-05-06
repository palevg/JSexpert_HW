/*	ЗАДАЧИ
1. Создайте функцию, возвращающую слово «ворона» в правильной форме в зависимости от переданого числа n.
Например: На ветке сидит 1 ворона; На ветке сидит 4 вороны; На ветке сидит 26 ворон.*/

function correctRaven(count) {
	let result = "На ветке сидит " + count + " ворон";
	if (!isNaN(count)) {
		let subCount10 = count % 10,
				subCount100 = count % 100;
		if (subCount10 == 1) {
			if (subCount100 != 11) {
				result += "а.";
			} else {
				result += ".";
			}
		} else {
			if (subCount10 >= 2 && subCount10 <= 4) {
				if (subCount100 >= 12 && subCount100 <= 14) {
					result += ".";
				} else {
					result += "ы.";
				}
			} else {
				result += ".";
			}
		}
	}
	else {
		result = "Error - count is not found";
	}
	return result;
}

for (let i = 1; i < 135; i++) {
	console.log(correctRaven(i));
}
console.log(correctRaven());    //Error - count is not found