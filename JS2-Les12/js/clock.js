const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
	todayDate = document.getElementsByClassName('today-date');
let date = new Date();

function digits(place, time) {
	let firstDigit;
	time > 9 ? firstDigit = String(Math.trunc(time/10)) : firstDigit = '0';
	document.querySelector('.' + place + ' .first .number').innerHTML = firstDigit;
	document.querySelector('.' + place + ' .second .number').innerHTML = String(time % 10);
}

setInterval(function() {
	const now = new Date();
	digits('hours', now.getHours());
	digits('minutes', now.getMinutes());
	digits('seconds', now.getSeconds());
	if (date !== now.getDate()) {
		date = now.getDate();
		todayDate[0].innerHTML = `Сегодня ${now.toLocaleString('ru', {weekday: 'long'})}, ${now.getDate()} ${months[now.getMonth()]}.`;
		const newDate = new Date(now.getFullYear() + 1, 0, 1);
		todayDate[1].innerHTML = `До ${now.getFullYear() + 1} года осталось ${Math.trunc((newDate - now)/86400000)} дней.`;
	}
}, 1000);