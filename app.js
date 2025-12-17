//hämtar in alla html-element som kommer användas
const logoBtn = document.querySelector("#logo");
const cart = document.querySelector("#cart");
const main = document.querySelector("#main-page");
const productListEl = document.querySelector("#productList");
const modaler = document.querySelector("#modal");
const cartModaler = document.querySelector("#cartModal");
const cartProducts = document.querySelector("#product-cart");
const cartSum = document.querySelector("#cart-sum");
const cartCounter = document.querySelector("#cartCounter");

//skapar en klass för produkt-korten
class Product {
    constructor(img, name, price, category, id, info) {
        this.img = img;
        this.name = name;
        this.price = price;
        this.button = "Läs mer...";
        this.category = category;
        this.id = id;
        this.info = info;
        this.addtoCart = "Lägg till";
        productList.push(this);
    }
}

//lista för alla produkter
const productList = [];

//skapar nya produkter i klassen
const vas1 = new Product(
    "photos/vas4.jpg",
    "Vas Nygren",
    1599,
    "Vaser",
    1,
    "Skulptural vas med handdrejade detaljer. Lika vacker med en ensam blomma som utan innehåll."
);

const vas2 = new Product(
    "photos/frontpagepic2.jpg",
    "Vas Svensson",
    599,
    "Vaser",
    2,
    "En stilren vas med balanserad form och naturlig glasyr. Ett lugnt och tidlöst inslag i alla rum."
);

const vas3 = new Product(
    "photos/frontpagepic2.jpg",
    "Vas Lindquist",
    799,
    "Vaser",
    3,
    "Karaktärsfull vas där hantverket får ta plats. Varje vas har sitt eget uttryck och blir ett konstverk i sig."
);
const tallrik1 = new Product(
    "photos/frontpagepic2.jpg",
    "Tallrik Holm",
    678,
    "Tallrikar",
    4,
    "Handgjord tallrik med subtila ojämnheter som ger en varm, organisk känsla. Lyfter både vardags- och helgmiddagar."
);
const tallrik2 = new Product(
    "photos/frontpagepic2.jpg",
    "Tallrik Stenberg",
    899,
    "Tallrikar",
    5,
    "En tidlös tallrik i stengods med mjuk glasyr och harmoniska proportioner. Skapad för att användas och uppskattas länge."
);
const tallrik3 = new Product(
    "photos/frontpagepic2.jpg",
    "Tallrik Lundin",
    988,
    "Tallrikar",
    6,
    "Rustik tallrik med ett modernt uttryck. Varje tallrik är unik och ger dukningen ett personligt uttryck."
);
const skål1 = new Product(
    "photos/frontpagepic2.jpg",
    "Skål Lundberg",
    988,
    "Skålar",
    7,
    "En handdrejad skål med mjuka former och levande glasyr. Perfekt för frukost, snacks eller som ett dekorativt inslag i hemmet."
);
const skål2 = new Product(
    "photos/frontpagepic2.jpg",
    "Skål Johnsson",
    988,
    "Skålar",
    8,
    "Minimalistisk skål i stengods med naturlig finish. Varje exemplar är unikt och bär spår av det hantverk som format den."
);
const skål3 = new Product(
    "photos/frontpagepic2.jpg",
    "Skål Dahl",
    988,
    "Skålar",
    9,
    "En robust men elegant skål med karaktär. Passar lika bra på middagsbordet som på hyllan som ett konstobjekt."
);

//funktion som visar samtliga produkter
const startSida = () => {
    productListEl.innerHTML = "";
    productList.forEach((prod) => {
        productListEl.innerHTML += `<div class="product-div"> <div class="image-modal"><img class="product-img"src= " ${prod.img}"> </div>
        <h3>${prod.name}</h3> <span>${prod.price} kr</span> <button class="product-btn" onclick="openModal(${prod.id})">${prod.button}</button> </div>`;
    });
};
startSida();

// Modal till varje enskild produkt
const openModal = (id) => {
    const specificmodal = productList.find((p) => p.id === id);
    modaler.innerHTML = ` 
    <div id="modal-content" class="product-div"> <div class="info-img"><img class="product-img"src= " ${specificmodal.img}"> </div>
        <h3>${specificmodal.name}</h3> <span>${specificmodal.price} kr</span> <p id="prod-info"> ${specificmodal.info}</p>
        <button onclick="addToCart(${specificmodal.id})" class="add-btn">${specificmodal.addtoCart}</button> </div>
    `;
    modaler.style.display = "block";
};

//funktion som stänger modalerna när du klickar utanför dom
window.addEventListener("click", (event) => {
    if (event.target == modaler) {
        modaler.style.display = "none";
    }

    if (event.target == cartModaler) {
        cartModaler.style.display = "none";
    }
});

//lista för produkterna som ligger i varukorgen
let cartList = [];

// funktion för att lägga till produkter i varukorgen
const addToCart = (id) => {
    const product = productList.find((p) => p.id === id);
    const cartItem = cartList.find((p) => p.id === id);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cartList.push({ ...product, quantity: 1 });
    }
    updateCart();
    cartSum.textContent = totalSum() + " kr";
};

//funktion som ökar antalet av en viss produkt i varukorgen
const increaseItem = (id) => {
    const cartItem = cartList.find((p) => p.id === id);

    if (cartItem) {
        cartItem.quantity += 1;
    }

    updateCart();
    cartSum.textContent = totalSum() + " kr";
};

//funktion som minskar antalet av en viss produkt i varukorgen
const decreaseItem = (id) => {
    const cartItem = cartList.find((p) => p.id === id);

    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
    } else if ((cartItem.quantity = 1)) {
        removeProduct(id);
    }
    updateCart();
    cartSum.textContent = totalSum() + " kr";
};

//funktion som räknar ut totala summan av varukorgen
const totalSum = () => {
    let sum = 0;
    cartList.forEach((product) => {
        sum += product.price * product.quantity;
    });
    return sum;
};

//funktion som öppnar varukorgs-modalen
const openCart = () => {
    cartModaler.style.display = "flex";
};

//funktion som tar bort en specifik produkt i varukorgen
const removeProduct = (id) => {
    cartList = cartList.filter((p) => p.id !== id);

    updateCart();
    cartSum.textContent = totalSum() + " kr";
};

//funktion som tar bort alla produkter i varukorgen
const clearCart = () => {
    cartList = [];
    cartSum.textContent = totalSum() + " kr";
    updateCart();
};

//funktion som stänger varukorgen
const closeModal = () => {
    cartModaler.style.display = "none";
};

//funktion som filtrerar beroende på kategori och ersätter the main div med den nya listan
const filter = (category) => {
    productListEl.innerHTML = "";
    const specificProduct = productList.filter((p) => p.category === category);
    specificProduct.forEach((prod) => {
        productListEl.innerHTML += `<div class="product-div"> <div class="image-modal"><img class="product-img"src= " ${prod.img}"></div>
        <h3>${prod.name}</h3> <span>${prod.price} kr</span> <button class="product-btn" onclick="openModal(${prod.id})">${prod.button}</button> </div>`;
    });
};

//funktion som uppdaterar innerHTML för varukorgen
const updateCart = () => {
    cartProducts.innerHTML = "";
    cartList.forEach((prod) => {
        cartProducts.innerHTML += `<div id="remove${prod.id}" class="cart-product-card" >
        <div class="cart-img"><img class="product-img"src= " ${prod.img}"> </div>
    <div id="wrap-div"> <h3>${prod.name}</h3>
    <span>${prod.price} kr</span>
    <div id="buttons-wrap">
    <button class="cart-button"onclick="decreaseItem(${prod.id})">-</button> 
    <span class="span-cart" id="span${prod.id}">${prod.quantity}</span>
    <button class="cart-button" onclick="increaseItem(${prod.id})"> + </button></div>
    <button id="tabort-knapp" class="cart-button" onclick="removeProduct(${prod.id})">Ta bort</button>
     </div> 
    </div>`;
    });
    cartAmount();
};

let counter = 0;

//funktion som räknar ut antalet produkter i varukorgen
const cartAmount = () => {
    counter = 0;
    cartList.forEach((prod) => {
        counter += prod.quantity;
    });
    cartCounter.innerHTML = `${counter}`;
};

cartAmount();
