function Product(brand, name, price, img, bye, info) {
	this.brand = brand,
	this.name = name,
	this.price = price,
	this.img = img,
	this.bye = bye,
	this.info = info

}
let product1 = new Product('Omega3', '49kr', 'images/tillskott/coffein.jpg', 'Lägg till', 'info');
let product2 = new Product('Omega3', '49kr', 'images/tillskott/tillskott1.jpg', 'Lägg till', 'info');
let product3 = new Product('Omega3', '49kr', 'images/tillskott/tillskott2.jpg', 'Lägg till', 'info');
let product4 = new Product('Omega3', '49kr', 'images/tillskott/tillskott3.jpg', 'Lägg till', 'info');
let product5 = new Product('Omega3', '49kr', 'images/tillskott/tillskott4.jpg', 'Lägg till', 'info');
let product6 = new Product('Omega3', '49kr', 'images/tillskott/tillskott5.jpg', 'Lägg till', 'info');
let product7 = new Product('Omega3', '49kr', 'images/tillskott/tillskott6.jpg', 'Lägg till', 'info');
let product8 = new Product('Omega3', '49kr', 'images/tillskott/tillskott7.jpg', 'Lägg till', 'info');
let product9 = new Product('Goodlife', '15 x Goodlife, 50 gr', '159 :-', 'images/tillskott/goodlife.jpg', 'Lägg till', 'info');
let product10 = new Product('NOCCO - No Carbs Company', '´24 x NOCCO BCAA, 330 ml', '429 :-', 'images/tillskott/nocco.jpg', 'Lägg till', 'info');
let product11 = new Product('Star Nutrition', 'Peanut Butter, 1 kg', '89 :-', 'images/tillskott/peanutButter.jpg', 'Lägg till', 'info');
let product12 = new Product('Pro Brands', 'Rehydrate, 20 tabs, Raspberry', '22 :-', 'images/tillskott/rehydrate.jpg', 'Lägg till', 'info');
let product13 = new Product('Star Nutrition', 'Beta-alanine, 320 g', '149 :-', 'images/tillskott/betaAlanine.jpg', 'Lägg till', 'info');


let products = [product1, product2, product3, product4, product5, product6, product7, product8, , product9, product10, product11, product12, product13];

let products = [product1, product2, product3, product4, product5, product6, product7, product8];

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
