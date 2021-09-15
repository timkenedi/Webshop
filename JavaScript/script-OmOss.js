function Medlem(name, img, befattning) {
	this.name = name,
	this.img = img,
	this.befattning = befattning
}

let medlem1 = new Medlem('Anten', 'images/avatar/avatar1.png', 'CEO');
let medlem2 = new Medlem('Mikael', 'images/avatar/avatar2.png', 'Ekonomi');
let medlem3 = new Medlem('Timothy', 'images/avatar/avatar3.png', 'Försäljning');
let medlem4 = new Medlem('Veronica', 'images/avatar/avatar4.png', 'Personal')



let medlemmar = [medlem1, medlem2, medlem3, medlem4];

for (let i = 0; i < medlemmar.length; i++) {
	let newElement = createElement(medlemmar[i]);
	appendElementToHTML(newElement);
}

function createElement(medlem) {
	let newElement = document.createElement('div');
	newElement.className = 'product';
	newElement.innerHTML = `<img src="${medlem.img}" style=align="center">
							<div class="productInfo">
								<h3> ${medlem.name}</h3>
								<h3> ${medlem.befattning}</h3>
							</div>`;

	return newElement;
}

function appendElementToHTML(element) {
	let content = document.getElementById('content');
	content.appendChild(element);
}
