let total = 0,
		str;
for (let i = 1; i <= 15; i++) {
	if (i === 8 || i === 13) {continue;}
	const first = Math.floor((Math.random() * 6) + 1),
				second = Math.floor((Math.random() * 6) + 1);
	str = "Первая кость: " + first + " Вторая кость: " + second + "<br>";
	if (first === second) {
		str += "Выпал дубль. Число " + first + "<br>";
	}
	if ((first < 3 && second > 4) || (first > 4 && second < 3)) {
		let razbros = second - first;
		if (razbros < 0) {razbros *= -1;}
		str += "Большой разброс между костями. Разница составляет " + razbros + "<br>";
	}
	document.getElementById("result").innerHTML += str;
	total += first + second;
}
total > 100 ? str = "Победа, вы набрали " + total + " очков" : str = "Вы проиграли, у вас " + total + " очков";
document.getElementById("result").innerHTML += str;