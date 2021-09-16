function Product(name, price, img, bye, info) {
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
