/*	ЗАДАЧИ
1. Напишите цикл для вывода квадратов всех чисел от 1 до 7. В итоге вы должны получить такую картину:
Квадрат 1 = 1
Квадрат 2 = 4
Квадрат 3 = 9
Квадрат 4 = 16
Квадрат 5 = 25
Квадрат 6 = 36
Квадрат 7 = 49.*/
for (let i = 1; i < 8; i++) {
	elemResult.innerHTML += 'Квадрат ' + i + ' = ' + Math.pow(i, 2) + '<br>';
}


/*2. Напишите цикл для определения четных чисел от 1 до 15. Реализуйте эту задачу тремя видами циклов. Вывод цикла должен содержать:
Число 1. Нечетное;
Число 2. Четное;
Число 3. Нечетное и т.д.*/
for (let i = 1; i < 16; i++) {
	let str = 'Число ' + i;
	i % 2 == 0 ? str += '. Четное;<br>' : str += '. Нечетное;<br>';
	elemResult.innerHTML += str;
}
let i = 1;
while (i < 16) {
	let str = 'Число ' + i;
	i++ % 2 == 0 ? str += '. Четное;<br>' : str += '. Нечетное;<br>';
	elemResult.innerHTML += str;
}
i = 1;
do {
	let str = 'Число ' + i;
	i % 2 == 0 ? str += '. Четное;<br>' : str += '. Нечетное;<br>';
	elemResult.innerHTML += str;
} while (++i < 16);


/*3. Сократите код используя циклы:
elemResult.innerHTML += 'Число: <b>100</b><br>';
elemResult.innerHTML += 'Число: <b>80</b><br>';
elemResult.innerHTML += 'Число: <b>60</b><br>';
elemResult.innerHTML += 'Число: <b>50</b><br>';
elemResult.innerHTML += 'Число: <b>40</b><br>';
elemResult.innerHTML += 'Число: <b>20</b><br>';
elemResult.innerHTML += 'Число: <b>10</b><br>';
elemResult.innerHTML += 'Число: <b>0</b><br>';
*/
let numbers = [100, 80, 60, 50, 40, 20, 10, 0];
for (let item of numbers) {
	elemResult.innerHTML += 'Число: <b>' + item + '</b><br>';
}