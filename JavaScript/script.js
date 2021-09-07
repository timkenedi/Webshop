function Product(produkt, pris, img) {
	this.produkt = produkt,
	this.pris = pris,
	this.img = img
}

let product1 = new Product('Air Max 90', 1299:-, 'airmax.JPG');
let product2 = new Product('Test', 500:-, 'img/avatar2.png');
let product3 = new Product('Test2', 999:-, 'img/avatar3.png');
let product3 = new Product('Test2', 999:-, 'img/avatar3.png');


let products = [product1, product2, product3];

for (let i = 0; i < products.length; i++) {
	let newElement = createElement(products[i]);
	appendElementToHTML(newElement);
}

function createElement(product) {
	let newElement = document.createElement('div');
	newElement.className = 'product';
	newElement.innerHTML = `<img src="${product.img}">
							<div class="ProductInfo">
								<h3>Produkt: ${product.produkt}</h3>
								<h3>Pris: ${product.pris}</h3>
							</div>`;

	return newElement;
}

function appendElementToHTML(element) {
	let content = document.getElementById('content');
	content.appendChild(element);
}
