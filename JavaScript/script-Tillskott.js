function Product(name, price, img, bye, info) {
	this.name = name,
	this.price = price,
	this.img = img,
	this.bye = bye,
	this.info = info

}

let product1 = new Product('Omega3', '49kr', 'images/tillskott/coffein.jpg', 'Lägg till', 'info');
let product2 = new Product('Omega3', '49kr', 'images/tillskott/coffein.jpg', 'Lägg till', 'info');
let product3 = new Product('Omega3', '49kr', 'images/tillskott/coffein.jpg', 'Lägg till', 'info');



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
								<button class="productInfoButton"> ${product.bye}</button>
								<button class="productInfoButton"> ${product.info}</button>
							</div>`;

	return newElement;
}

function appendElementToHTML(element) {
	let content = document.getElementById('content');
	content.appendChild(element);
}
