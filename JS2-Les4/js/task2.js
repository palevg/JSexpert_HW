/*2. Напишите функцию, которая принимает строку и выполняет следующее преобразование:
если принимаемая строка больше или равна 15 символов, то остаток строки обрезается и вставляется символ … (троеточие).
Для решения этой задачи используйте строковый метод String.substring().*/

function isTooLong(str, count) {
	let result = str;
	if (str.length >= count) {
		result = str.substring(0, count) + "…";
	}
	return result;
}

console.log(isTooLong("1600", 15));  //1600
console.log(isTooLong("asdfghjklo2100rtey", 15));  //asdfghjklo2100r…