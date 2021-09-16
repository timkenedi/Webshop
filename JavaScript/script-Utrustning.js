function Product(brand, name, price, img, bye, info) {
	this.brand = brand,
	this.name = name,
	this.price = price,
	this.img = img,
	this.bye = bye,
	this.info = info

}

let product1 = new Product('GAIAM', 'Grey Hamsa Yoga Mat 4mm', '299 :-', 'images/utrustning/yogaMatta.jpg', 'Lägg till', 'info');
let product2 = new Product('GARMIN', 'Vivoactive 4 S', '3249 :-', 'images/utrustning/pulsklocka.jpg', 'Lägg till', 'info');
let product3 = new Product('ABILICA', 'Door Gym', '499 :-', 'images/utrustning/doorGym.jpg', 'Lägg till', 'info');
let product4 = new Product('Casall', 'Tube Roll', '599 :-', 'images/utrustning/tubeRoll.jpg', 'Lägg till', 'info');
let product5 = new Product('CASALL', 'Eco Cold Bottle', '199 :-', 'images/utrustning/bottle.jpg', 'Lägg till', 'info');
let product6 = new Product('NIKE', 'Push Up Grip 3.0', '299 :-', 'images/utrustning/pushUpGrip.jpg', 'Lägg till', 'info');
let product7 = new Product('IRON GYM', 'Fixed Hex Dumbbell 4kg Pair', '299 :-', 'images/utrustning/dumbbell.jpg', 'Lägg till', 'info');



let products = [product1, product2, product3, product4, product5, product6, product7];

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
								<button>${product.bye}</button>
								<button>${product.info}</button>
							</div>`;

	return newElement;
}

function appendElementToHTML(element) {
	let content = document.getElementById('content');
	content.appendChild(element);
}
