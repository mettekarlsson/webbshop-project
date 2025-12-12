//hämtar in alla html-element
const logoBtn = document.querySelector("#logo");
const cart = document.querySelector("#cart");
const main = document.querySelector("#main-page");
const productListEl = document.querySelector("#productList");
const modaler = document.querySelector("#modal");
const cartModaler = document.querySelector("#cartModal");
const cartProducts = document.querySelector("#product-cart");
const cartSum = document.querySelector("#cart-sum");


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
        this.quantity = 1
        productList.push(this);
    }
}

const productList = [];
//skapar en ny product i klassen
const vas1 = new Product(
    "photos/vas4.jpg",
    "Vas Nygren",
    1599,
    "Läs mer...",
    "Vaser",
    1,
    "Beskrivning",
    "Lägg till"
);

const vas2 = new Product(
    "photos/frontpagepic2.jpg",
    "Vas Svensson",
    599,
    "Läs mer...",
    "Vaser",
    2,
    "Beskrivning",
    "Lägg till"
);

const vas3 = new Product(
    "photos/frontpagepic2.jpg",
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
const openModal = id => {
    const specificmodal = productList.find(p => p.id === id);
    modaler.innerHTML = ` 
    <div id="modal-content" class="product-div"> <img class="product-img"src= " ${specificmodal.img}"> 
        <h3>${specificmodal.name}</h3> <span>${specificmodal.price}</span> <p> ${specificmodal.info}</p>
        <button onclick="addToCart(${specificmodal.id})" class="add-btn">${specificmodal.addtoCart}</button> </div>
    `;
    modaler.style.display = "block";
};

window.addEventListener("click", event => {
    if (event.target == modaler) {
        modaler.style.display = "none";
    }

    if (event.target == cartModaler) {
        cartModaler.style.display = "none";
    }
});

let cartList = [];

// funktion för att lägga till produkter i cart
const addToCart = id => {
    const addtocart = productList.find(p => p.id === id);


    if (cartList.find(p => p.id === id)){
        cartList.push(addtocart);
        totalSum();
        cartSum.textContent = totalSum() + " kr";
        const span = document.querySelector("#span" + id)
        let newNumber = parseInt(span.textContent);
        newNumber++
        span.textContent = newNumber

    } else {
        cartList.push(addtocart)
       cartProducts.innerHTML +=  `<div id="remove${addtocart.id}" class="cart-product-card" > <img class="product-img"src= " ${addtocart.img}"> 
    <h3>${addtocart.name}</h3> <span>${addtocart.price}</span> <button onclick="decreaseItem(${addtocart.id}, 'span${addtocart.id}')">-</button> 
    <span id="span${addtocart.id}">1</span> <button onclick="increaseItem(${addtocart.id})"> + </button>
    <button onclick="removeProduct(${addtocart.id})">X</button> 
    </div>`;
    totalSum();
    cartSum.textContent = totalSum() + " kr";
    }
};

const increaseItem = (id) => {
    addToCart(id)   
}

/* const decreaseItem = (id, span) => {
    const decrease = cartList.findIndex(p => p.id === id);
    const spanNum = document.querySelector(span)
    let newNumber = parseInt(spanNum.textContent);
    newNumber--
    spanNum.textContent = newNumber
    cartList.splice(decrease, 1) 
    cartSum.textContent = totalSum() + " kr"
    console.log(decrease)
} */


//funktion som räknar ut totala summan av varukorgen
const totalSum = () => {
    let sum = 0;
    cartList.forEach(product => {
        sum += product.price;
    });
    return sum;
};

// funktion med modal om cart
const openCart = () => {
    cartModaler.style.display = "flex";
};

//funktion som tar bort en specifik produkt i varukorgen
const removeProduct = id => {
    cartProducts.innerHTML = "";
    cartList = cartList.filter(product => product.id !== id);
    cartList.forEach(prod => {
        cartProducts.innerHTML += `<div id="remove${prod.id}" class="cart-product-card" > <img class="product-img"src= " ${prod.img}"> 
        <h3>${prod.name}</h3> <span>${prod.price}</span> <button onclick="decreaseItem(${prod.id})">-</button> 
    <span id="span${prod.id}">1</span> <button onclick="increaseItem(${prod.id})"> + </button>
        <button onclick="removeProduct(${prod.id})">X</button>
        </div>`;
    });
    totalSum();
    cartSum.textContent = totalSum() + " kr";
};

//funktion som tar bort alla produkter i varukorgen
const clearCart = () => {
    cartProducts.innerHTML = "";
    cartSum.textContent = "0 kr";
};

//funktion som stänger varukorgen
const closeModal = () => {
    cartModaler.style.display = "none";
};

//funktion som filtrerar beroende på kategori och ersätter the main div med den nya listan
const filter = category => {
    productListEl.innerHTML = "";
    const specificProduct = productList.filter(p => p.category === category);
    specificProduct.forEach(prod => {
        productListEl.innerHTML += `<div class="product-div"> <img class="product-img"src= " ${prod.img}"> 
        <h3>${prod.name}</h3> <span>${prod.price}</span> <button class="product-btn" onclick="openModal(${prod.id})">${prod.button}</button> </div>`;
    });
};
