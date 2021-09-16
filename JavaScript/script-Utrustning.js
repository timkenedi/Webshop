function Product(name, price, img, bye, info) {
	this.name = name,
	this.price = price,
	this.img = img,
	this.bye = bye,
	this.info = info

}

let product1 = new Product('Hörlurar', '1149kr', 'images/utrustning/utrustning1.jpg', 'Lägg till', 'info');
let product2 = new Product('Hantel 3kg', '249kr', 'images/utrustning/utrustning2.jpg', 'Lägg till', 'info');
let product3 = new Product('Gummiband', '49kr', 'images/utrustning/utrustning3.jpg', 'Lägg till', 'info');
let product4 = new Product('Vikter', '449kr', 'images/utrustning/utrustning4.jpg', 'Lägg till', 'info');



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
