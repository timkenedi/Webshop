function Product(name, price, img) {
	this.name = name,
	this.price = price,
	this.img = img
}

let product1 = new Product('Air Max 90', '1299kr', 'images/airmax.JPG');
let product2 = new Product('Air Force 1', '1150kr', 'images/airforce.JPG');
let product3 = new Product('Jordan 1985', '30000kr', 'images/jordan.JPG')


let products = [product1, product2, product3];

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
							</div>`;

	return newElement;
}

function appendElementToHTML(element) {
	let content = document.getElementById('content');
	content.appendChild(element);
}
