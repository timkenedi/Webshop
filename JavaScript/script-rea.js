function Product(brand, name, price, rea, img, bye, info) {
	this.brand = brand,
	this.name = name,
	this.price = price,
	this.rea = rea,
	this.img = img,
	this.bye = bye,
	this.info = info
}

let product1 = new Product('NEW BALANCE','M Booster', '1049 :-','525:-', 'images/skor/new-balance.png', 'Lägg till', 'info');
let product2 = new Product('Puma', 'RS-Fast', '1199:-', '600:-', 'images/skor/pumaRS-Fast.png', 'Lägg till', 'info');
let product3 = new Product('ADIDAS', 'core', '400:-', '150:-', 'images/Klader/AddidasCORE-ELEVEN.png', 'Lägg till', 'info');
let product4 = new Product('NiKE', 'Preformance', '499:-', '200:-', 'images/klader/nike_Preformance.png', 'Lägg till', 'info');
let products = [product1, product2, product3, product4];

for (let i = 0; i < products.length; i++) {
	let newElement = createElement(products[i]);
	appendElementToHTML(newElement);
}

function createElement(product) {
	let newElement = document.createElement('div');
	newElement.className = 'product';
	newElement.innerHTML = `<img src="${product.img}">
							<div class="productInfo">
								<h3> ${product.brand}</h3>
								<h3> ${product.name}</h3>
								<h5> ${product.price}</h5>
								<h6> ${product.rea}</h6>
								<button class="productInfoButton"> ${product.bye}</button>
								<button class="productInfoButton"> ${product.info}</button>
							</div>`;

	return newElement;
}

function appendElementToHTML(element) {
	let content = document.getElementById('content');
	content.appendChild(element);
}
