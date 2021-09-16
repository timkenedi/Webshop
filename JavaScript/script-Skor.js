function Product(brand, name, price, img, bye, info) {
	this.brand = brand,
	this.name = name,
	this.price = price,
	this.img = img,
	this.bye = bye,
	this.info = info

}

let product1 = new Product('NIKE', 'Air Max 90', '1299 :-', 'images/skor/airmax.JPG', 'Lägg till', 'info');
let product2 = new Product('NIKE','Air Force 1', '1150 :-', 'images/skor/airforce.JPG', 'Lägg till', 'info');
let product3 = new Product('NIKE','Jordan 1985', '30000 :-', 'images/skor/jordan.JPG', 'Lägg till', 'info');
let product4 = new Product('NIKE','W Air Max Excee', '1199 :-', 'images/skor/AIR_MAX_EXCEE.jpg', 'Lägg till', 'info');
let product5 = new Product('ADIDAS','W Puremotion Adapt', '499 :-', 'images/skor/PUREMOTION_ADAPT.jpg', 'Lägg till', 'info');
let product6 = new Product('NIKE','W Air Max Sc', '899 :-', 'images/skor/AIR_MAX_SC.jpg', 'Lägg till', 'info');
let product7 = new Product('NIKE','Precision Iv', '749 :-', 'images/skor/PRECISION_IV.jpg', 'Lägg till', 'info');
let product8 = new Product('ADIDAS','M Kaptir 2.0', '849 :-', 'images/skor/ADIDAS_M_KAPTIR.jpg', 'Lägg till', 'info');
let product9 = new Product('NIKE','M Air Max Sc', '899 :-', 'images/skor/M_AIR_MAX_SCman.jpg', 'Lägg till', 'info');
let product10 = new Product('NIKE','W Crater Remixa', '849 :-', 'images/skor/CRATER_REMIXA_D2.jpg', 'Lägg till', 'info');


let products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];

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
								<h3> ${product.price}</h3>
								<button class="productInfoButton"> ${product.bye}</button>
								<button class="productInfoButton"> ${product.info}</button>
							</div>`;

	return newElement;
}

function appendElementToHTML(element) {
	let content = document.getElementById('content');
	content.appendChild(element);
}
