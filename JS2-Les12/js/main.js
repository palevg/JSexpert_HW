(function(){

const btn = document.getElementById("play"),
	firstBlock = document.querySelector('#first-line'),
	secondBlock = document.querySelector('#second-line'),
	thirdBlock = document.querySelector('#third-line'),
	galleryData = data.map(function(number) {
		number.url = "http://" + number.url;
		number.name = number.name.charAt(0).toUpperCase() + number.name.slice(1).toLowerCase();
		if (number.description.length > 15) {
			number.description = number.description.substring(0, 15) + "…";
		}
		number.date = moment(number.date).format("YYYY/MM/DD HH:mm");
		return number;
	});
let selected = 0;

function init() {
	const typeSelector = Number(document.getElementById("type-selector").value);
	let lineSelector = Number(document.getElementById("line-selector").value);
	// ховаємо блок, який був відображений при попередній ітерації
	if (typeSelector !== selected) {
		switch (selected) {
			case 1:
				document.querySelector('.first-group').classList.remove("show");
				break;
			case 2:
				document.querySelector('.second-group').classList.remove("show");
				break;
			case 3:
				document.querySelector('.third-group').classList.remove("show");
				break;
		}
		selected = typeSelector;	//запам'ятовуємо блок для майбутнього "приховання"
	}

	let resultHTML = '';

	if (typeSelector) {
		if (!lineSelector) {lineSelector = galleryData.length;}
		switch (typeSelector) {
			case 1:		//побудова галереї методом replace
				const replaceItemTemplate = '<div class="col-sm-3 col-xs-6">\
					<img src="$url" alt="$name" class="img-thumbnail">\
					<div class="info-wrapper">\
						<div class="text-muted">$name</div>\
						<div class="text-muted top-padding">$description</div>\
						<div class="text-muted">$date</div>\
					</div>\
				</div>';
				for (let i = 0; i < lineSelector; i++) {
					resultHTML += replaceItemTemplate
						.replace(/\$name/gi, galleryData[i].name)
						.replace("$url", galleryData[i].url)
						.replace("$description", galleryData[i].description)
						.replace("$date", galleryData[i].date);
				}
				firstBlock.innerHTML = resultHTML;
				if (!document.querySelector('.first-group').classList.contains("show")) {
					document.querySelector('.first-group').classList.add("show");
				}
				break;
			case 2:		//побудова галереї методом шаблонних строк
				for (let i = 0; i < lineSelector; i++) {
				resultHTML += `<div class="col-sm-3 col-xs-6">\
					<img src="${galleryData[i].url}" alt="${galleryData[i].name}" class="img-thumbnail">\
					<div class="info-wrapper">\
						<div class="text-muted">${galleryData[i].name}</div>\
						<div class="text-muted top-padding">${galleryData[i].description}</div>\
						<div class="text-muted">${galleryData[i].date}</div>\
					</div>\
				</div>`;
				}
				secondBlock.innerHTML = resultHTML;
				if (!document.querySelector('.second-group').classList.contains("show")) {
					document.querySelector('.second-group').classList.add("show");
				}
				break;
			case 3:		//побудова галереї методом createElement
				thirdBlock.innerHTML = '';
				for (let i = 0; i < lineSelector; i++) {
					let elementOuter = document.createElement('div');
					elementOuter.className = 'col-sm-3 col-xs-6';
					let elementInner = document.createElement('img');
					elementInner.src = galleryData[i].url;
					elementInner.alt = galleryData[i].name;
					elementInner.className = 'img-thumbnail';
					elementOuter.appendChild(elementInner);
					elementInner = document.createElement('div');
					elementInner.className = 'info-wrapper';
					elementOuter.appendChild(elementInner);
					thirdBlock.appendChild(elementOuter);
					elementOuter = document.querySelectorAll('#third-line .info-wrapper');
					elementInner = document.createElement('div');
					elementInner.className = 'text-muted';
					let elementText = document.createTextNode(galleryData[i].name);
					elementInner.appendChild(elementText);
					elementOuter[i].appendChild(elementInner);
					elementInner = document.createElement('div');
					elementInner.className = 'text-muted top-padding';
					elementText = document.createTextNode(galleryData[i].description);
					elementInner.appendChild(elementText);
					elementOuter[i].appendChild(elementInner);
					elementInner = document.createElement('div');
					elementInner.className = 'text-muted';
					elementText = document.createTextNode(galleryData[i].date);
					elementInner.appendChild(elementText);
					elementOuter[i].appendChild(elementInner);
				}
				if (!document.querySelector('.third-group').classList.contains("show")) {
					document.querySelector('.third-group').classList.add("show");
				}
				break;
		}
	} else {alert("Виберіть один із варіантів побудови галереї!")}
}

btn.addEventListener("click", init);

})()