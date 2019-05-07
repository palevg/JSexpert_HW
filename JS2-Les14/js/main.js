(function(){

const btn = document.getElementById("add-record"),
	galleryBlock = document.getElementById('gallery'),
	galleryCount = document.getElementById('gallery-count'),
	galleryResr = document.getElementById('gallery-rest'),
	sortType = document.getElementById('sort-selector'),
	galleryData = data.map(function(number) {
		number.url = "http://" + number.url;
		number.name = number.name.charAt(0).toUpperCase() + number.name.slice(1).toLowerCase();
		number.id = number.id;
		if (number.description.length > 15) {
			number.description = number.description.substring(0, 15) + "…";
		}
		number.date = moment(number.date).format("YYYY/MM/DD HH:mm");
		return number;
	});
let visibleData = [],
	resultHTML = '';

// перемикання select на останній вибраний варіант сортування
if (localStorage['sortType']) {
	sortType.value = localStorage['sortType'];
}

// формування одного блоку
function addRecordTemplate(record) {
	resultHTML += `<div class="col-sm-3 col-xs-6 text-center">\
		<div class="thumbnail">\
			<img src="${record.url}" alt="${record.name}">\
			<div class="info-wrapper">\
				<h3>${record.name}</h3>\
				<p>${record.description}</p>\
				<p>${record.date}</p>\
			</div>\
			<button class="btn btn-danger">Удалить<span class="hide">${record.id}</span></button>\
		</div>\
	</div>`;
}

// відображення галереї після сортування або видалення елемента
function showGallery() {
	resultHTML = '';
	for (let value of visibleData) {
		addRecordTemplate(value);
	}
	galleryBlock.innerHTML = resultHTML;
}

// зміна лічильників на сторінці, зміна кольору кнопки при потребі
function changeCounters() {
	visibleData.length === galleryData.length ?	btn.style.background = 'gray' : btn.style.background = 'white';
	galleryCount.innerHTML = visibleData.length;
	galleryResr.innerHTML = galleryData.length - visibleData.length;
}

// сортування галереї
sortType.addEventListener('change', function() {
	localStorage['sortType'] = document.getElementById('sort-selector').value;
	switch (document.getElementById('sort-selector').value) {
		case '0':
			visibleData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
			break;
		case '1':
			visibleData.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
			break;
		case '2':
			visibleData.sort((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0));
			break;
		case '3':
			visibleData.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
			break;
	}
	showGallery();
});

// додавання одного запису. Понад умови задачі реалізував додавання лише тих елементів, які ще не відображені на сторінці
btn.addEventListener('click', function() {
	if (visibleData.length !== galleryData.length) {
		for (let valueMain of galleryData) {
			let flag = true;
			for (let valueVisible of visibleData) {
				if (valueVisible.id === valueMain.id) {
					flag = false;
					break;
				}
			}
			if (flag) {
				addRecordTemplate(valueMain);
				visibleData.push(valueMain);
				galleryBlock.innerHTML = resultHTML;
				changeCounters();
				break;
			}
		}
	} else {
		alert('Все записи галереи отображены, дальнейшее добавление невозможно.');
	}
});

// видалення одного запису з галереї
galleryBlock.addEventListener('click', function(e) {
	if (e.target.nodeName === 'BUTTON') {
		for (let i = 0; i < visibleData.length; i++) {
			if (visibleData[i].id === Number(e.target.lastElementChild.innerText)) {
				visibleData.splice(i, 1);
				changeCounters();
				break;
			}
		}
		showGallery();
	}
});

})()