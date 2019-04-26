/* 1. Из данного массива удалить значение «technics».
Все остальное превратить в строку формата «foods, fruits…» преобразование в строку выполнить с помощью одного метода.*/
const goods = ['foods', 'fruits', 'technics', 'phones', 'computers'];

function task1() {
	goods.splice(goods.indexOf('technics'), 1);
	console.log(goods.join());
}

function addZero(target, incMonth) {
	if (incMonth) {
		target++;
	}
	if (target < 10) {
		target = "0" + target;
	}
	return target;
}

/* 2. Преобразовать текущую дату и время в понятный человеку формат: 08:05 01/01/2018. Используя шаблонные строки. */
function task2() {
	let date = new (Date),
			hours = addZero(date.getHours(), false),
			minutes = addZero(date.getMinutes(), false),
			day = addZero(date.getDate(), false),
			month = addZero(date.getMonth(), true),
			year = date.getFullYear();
	console.log(`${hours}:${minutes} ${day}/${month}/${year}`);
}

/* 3. Напишите функцию, которая возвращает расширение файла.
Например, getExt(«/home/user/project/script.js») вернет “js”. Функция должна принимать строку */
function task3(filePath) {
	let str;
	if (typeof filePath == 'string') {
		let pos = filePath.lastIndexOf(".");
		pos >= 0 ? str = 'Расширение файла - "' + filePath.substr(pos + 1) + '".' : str = "В данном пути нет расширения файла.";
	} else {
		str = "Недопустимый путь к файлу!";
	}
	return console.log(str);
}

/*4. Напишите функцию, которая удаляет дубликаты из массива.
Например, входной массив: [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6], массив который возвращает функция [1, 2, 4, 5, 7, 8, 3, 6]*/
const numbers = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

function task4() {
	let newNumbers = [];
	for (let value of numbers) {
		if (!newNumbers.some(item => item == value)) {
			newNumbers.push(value);
		}
	}
	return newNumbers;
}

task1();
task2();
task3("/home/user/project/script.js");
console.log(task4());