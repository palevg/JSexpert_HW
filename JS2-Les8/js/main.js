/*	ДОМАШНЕЕ ЗАДАНИЕ
Вам необходимо из массива данных, который находится в файле data.js создать новый выполнив серию преобразований.
Новый массив объектов необходимо вывести в консоль.
Заготовку сможете найти здесь: https://www.jsexpert.net/wp-content/uploads/2017/12/homeWork_17.zip
Напишите ваш функционал в main.js. Файл data.js уже подключен, по этому просто пишите код вашей программы, массив должен быть доступен.*/

const btn = document.getElementById("play"),
			taskResult = document.getElementById("result");

/* 1. С помощью функции splice необходимо вырезать 6-й элемент массива.
		В результате ваш массив должен стать короче на один элемент.*/
function spliceItem(item) {
	if (data.length > 5) {
		let str = "Начальная длина массива - " + data.length + " записей.<br>Удаляем шестой элемент массива. Это запись, где name=";
		const deleted = data.splice(item - 1, 1);
		str += deleted[0].name + ".<br>"
		for (let value of data) {
			str += value.name + ", ";
		}
		taskResult.innerHTML = str + "длина массива - " + data.length + " записей.";
	} else {
		taskResult.innerHTML += "<br>6-го элемента в массиве теперь нет, вот и удалять нечего!";
	}
}

/*2. Используйте функцию forEach.
	Внутри цикла создайте новый массив объектов.
	В процессе создания нового массива объектов, избавьтесь от ключа id.*/
function createNewArray(arr) {
	data.forEach(function(item, index) {
		let newObj = {};
		for (let key in item) {
			if (key != "id") {
				newObj[key] = item[key];
			}
		}
		arr.push(newObj);
	});
}

function transform() {
	spliceItem(6);
	let newData = [];
	createNewArray(newData);
	
	/*	3. По новому массиву объектов, полученному с помощью функции forEach пройдитесь методом map()
			4. На каждой итерации цикла мы получаем один объект из массива объектов. Берем этот объект и преобразоваем его поля по следующим правилам.
				Вам пригодится документация по дате и по строкам.	*/
	let mapData = newData.map(function(number) {
		/*5. Для поля Name: с помощью функций работы со стрингами делаете первую букву большой, остальные маленькие (ДЖИП -> Джип)*/
		number.name = number.name.charAt(0).toUpperCase() + number.name.slice(1).toLowerCase();

		/*6. Для поля url: добавить перед ним «http://»*/
		number.url = "http://" + number.url;

		/*7. Для поля Description: с помощью функций работы со стрингами делаете обрезание до 15 символов. После добавляем многоточие (…) Остальное отбрасываете.*/
		if (number.description.length > 15) {
			number.description = number.description.substring(0, 15) + "…";
		}

		/*8. Для поля date: создать объект даты из заданных миллисекунд и потом отобразить в виде «2015/07/02 14:15»
			9*.(дополнительное задание)
				Более предпочтительно работать с датой с помощью библиотеки moment.js*/
		number.date = moment(number.date).format("YYYY/MM/DD HH:mm");

		/*11. Создать новое поле isVisible. Переложить в это поле значение поля params.status.*/
		number.isVisible = number.params.status;

		/*10. Для поля params: из значений ключей сформировать строку типа «true=>80». Для выполнения задания можно обращаться к полям объект params напрямую.*/
		number.params = number.params.status + "=>" + number.params.progress;
		return number;
	});
	/*12. После всех преобразований функция map вернет вам новый массив.
	Теперь с помощью функции filter вам необходимо выбрать только те элементы у которых isVisible == true. Пример работы функции filter есть в презентации.*/
	let filterData = mapData.filter(item => item.isVisible == true);
	/*13. Полученный результат печатаем в консоль.
	Для печати используем отдельную функцию как в прошлых заданиях. То есть вынесете console.log в отдельную функцию.*/
	printResult(filterData);
}

function printResult(arr) {
	console.log(arr);
}

btn.addEventListener("click", transform);