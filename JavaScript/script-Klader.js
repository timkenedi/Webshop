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
let product6 = new Product('BURTON', 'M Crown Wpf Pullover', '949 :-', 'images/klader/burtonPullover.jpg', 'Lägg till', 'info');
let product7 = new Product('REEBOK', 'W Modern Safari Bralette', '379 :-', 'images/klader/reebok_BRALETTE.jpg', 'Lägg till', 'info');
let product8 = new Product('NIKE', 'M Nk Run Short 7in Bf', '269 :-', 'images/klader/nikeShort.jpg', 'Lägg till', 'info');
let product9 = new Product('NIKE', 'W Yoga Luxe Crop Tank', '449 :-', 'images/klader/nikeCropTank.jpg', 'Lägg till', 'info');
let product10 = new Product('ADIDAS', 'Real Zne Hood', '1299 :-', 'images/klader/adidasHood.jpg', 'Lägg till', 'info');


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
								<button class="productInfoButton" onclick="addToCart()"> <i class="fa fa-cart-arrow-down" id="icon"></i> ${product.bye}</button>
								<button class="productInfoButton"> ${product.info}</button>
							</div>`;

	return newElement;
}

function appendElementToHTML(element) {
	let content = document.getElementById('content');
	content.appendChild(element);
}

// Funktion som ändrar lägg till symbolen vid klick.
function addToCart() {
   var element = document.getElementById("icon");
   element.classList.remove("fa-cart-arrow-down");
   element.classList.add("fa-check");
	 document.getElementById("icon").style.color = "green";
}
