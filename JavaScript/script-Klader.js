function Product(brand, name, price, img, bye, info) {
	this.brand = brand,
	this.name = name,
	this.price = price,
	this.img = img,
	this.bye = bye,
	this.info = info

}

let product1 = new Product('NIKE', 'M Nsw Club Hoodie Po', '629 :-', 'images/klader/nikeHoodie.jpg', 'Lägg till', 'info');
let product2 = new Product('ADIDAS', 'W Farm G Swt', '629 :-', 'images/klader/adidasWFarm.jpg', 'Lägg till', 'info');
let product3 = new Product('NIKE', 'M Nsw Tee Just Do It Swoosh', '229 :-', 'images/klader/nikeTshirt.jpg', 'Lägg till', 'info');
let product4 = new Product('ADIDAS', 'M 3s Ft Tc Pant', '479 :-', 'images/klader/adidasPant.jpg', 'Lägg till', 'info');
let product5 = new Product('NIKE', 'W Nsw Essntl Pant Reg Flc', '449 :-', 'images/klader/nikePant.jpg', 'Lägg till', 'info');



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
