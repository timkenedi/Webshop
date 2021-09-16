function Product(brand, name, price, img, bye, info) {
	this.brand = brand,
	this.name = name,
	this.price = price,
	this.img = img,
	this.bye = bye,
	this.info = info

}

let product1 = new Product('Goodlife', '15 x Goodlife, 50 gr', '159 :-', 'images/tillskott/goodlife.jpg', 'Lägg till', 'info');
let product2 = new Product('NOCCO - No Carbs Company', '´24 x NOCCO BCAA, 330 ml', '429 :-', 'images/tillskott/nocco.jpg', 'Lägg till', 'info');
let product3 = new Product('Star Nutrition', 'Peanut Butter, 1 kg', '89 :-', 'images/tillskott/peanutButter.jpg', 'Lägg till', 'info');
let product4 = new Product('Pro Brands', 'Rehydrate, 20 tabs, Raspberry', '22 :-', 'images/tillskott/rehydrate.jpg', 'Lägg till', 'info');
let product5 = new Product('Star Nutrition', 'Beta-alanine, 320 g', '149 :-', 'images/tillskott/betaAlanine.jpg', 'Lägg till', 'info');



let products = [product1, product2, product3, product4, product5];

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
