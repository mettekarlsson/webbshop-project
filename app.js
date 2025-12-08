//hämtar in alla html-element
const logoBtn = document.querySelector("#logo");
const cart = document.querySelector("#cart");
const main = document.querySelector("#main-page");
const productListEl = document.querySelector("#productList");
const modaler = document.querySelector("#modal");
const cartModaler = document.querySelector("#cartModal");


//skapar en klass för produkt-korten
class Product {
    constructor(img, name, price, button, category, id, info, addtoCart) {
        this.img = img;
        this.name = name;
        this.price = price;
        this.button = button;
        this.category = category;
        this.id = id;
        this.info = info;
        this.addtoCart = addtoCart;
        productList.push(this);
    }
}

const productList = [];
//skapar en ny product i klassen
const vas1 = new Product(
    "photos/vas1.jpg",
    "Vas Nygren",
    1599,
    "Läs mer...",
    "Vaser",
    1,
    "Beskrivning",
    "Lägg till"
);

const vas2 = new Product(
    "photos/vas2.jpg",
    "Vas Svensson",
    599,
    "Läs mer...",
    "Vaser",
    2,
    "Beskrivning",
    "Lägg till"
);

const vas3 = new Product(
    "photos/vas3.jpg",
    "Vas Lindquist",
    799,
    "Läs mer...",
    "Vaser",
    3,
    "Beskrivning",
    "Lägg till"
);
const tallrik1 = new Product(
    "photos/frontpagepic2.jpg",
    "Tallrik Holm",
    678,
    "Läs mer...",
    "Tallrikar",
    4,
    "Beskrivning",
    "Lägg till"
);
const tallrik2 = new Product(
    "photos/frontpagepic2.jpg",
    "Tallrik Stenberg",
    899,
    "Läs mer...",
    "Tallrikar",
    5,
    "Beskrivning",
    "Lägg till"
);
const tallrik3 = new Product(
    "photos/frontpagepic2.jpg",
    "Tallrikar Lundin",
    988,
    "Läs mer...",
    "Tallrikar",
    6,
    "Beskrivning",
    "Lägg till"
);
const skål1 = new Product(
    "photos/frontpagepic2.jpg",
    "Skål Lundberg",
    988,
    "Läs mer...",
    "Skålar",
    7,
    "Beskrivning",
    "Lägg till"
);
const skål2 = new Product(
    "photos/frontpagepic2.jpg",
    "Skål Johnsson",
    988,
    "Läs mer...",
    "Skålar",
    8,
    "Beskrivning",
    "Lägg till"
);
const skål3 = new Product(
    "photos/frontpagepic2.jpg",
    "Skål Dahl",
    988,
    "Läs mer...",
    "Skålar",
    9,
    "Beskrivning",
    "Lägg till"
);

// Modal till varenda produkter
const openModal = (id) => {
    const specificmodal = productList.find((p) => p.id === id);
    modaler.innerHTML = ` 
    <div id="modal-content" class="product-div"> <img class="product-img"src= " ${specificmodal.img}"> 
        <h3>${specificmodal.name}</h3> <span>${specificmodal.price}</span> <p> ${specificmodal.info}</p>
        <button onclick="addToCart(${specificmodal.id})" class="add-btn">${specificmodal.addtoCart}</button> </div>
    `;
    modaler.style.display = "block";
};

window.addEventListener ("click", (event) => {
    if (event.target == modaler) {
        modaler.style.display = "none";
    }

    if (event.target == cartModaler) {
        cartModaler.style.display = "none";
    }

});


const cartList = [];

// funktion för att lägga till produkter i cart
const addToCart = (id) => {
    const addtocart = productList.find((p) => p.id === id);
    cartList.push(addtocart);
    console.log(cartList);
};


// funktion med modal om cart
const openCart = () => {
    cartList.forEach((prod) => {
        cartModaler.innerHTML += `<div class="product-div" id="modal-content"> <img class="product-img"src= " ${prod.img}"> 
        <h3>${prod.name}</h3> <span>${prod.price}</span> </div>`;
    });

    cartModaler.style.display = "block";
};


//funktion som filtrerar beroende på kategori och ersätter the main div med den nya listan
const filter = (category) => {
    productListEl.innerHTML = "";
    const specificProduct = productList.filter((p) => p.category === category);
    specificProduct.forEach((prod) => {
        productListEl.innerHTML += `<div class="product-div"> <img class="product-img"src= " ${prod.img}"> 
        <h3>${prod.name}</h3> <span>${prod.price}</span> <button class="product-btn" onclick="openModal(${prod.id})">${prod.button}</button> </div>`;
    });
};
