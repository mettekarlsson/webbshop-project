//hämtar in alla html-element
const logoBtn = document.querySelector("#logo");
const startBtn = document.querySelector("#startBtn");
const vaserBtn = document.querySelector("#vaserBtn");
const tallrikarBtn = document.querySelector("#tallrikarBtn");
const skålarBtn = document.querySelector("#skålarBtn");
const cart = document.querySelector("#cart");
const main = document.querySelector("#main-page");
const productListEl = document.querySelector("#productList");

logoBtn.addEventListener("click", () => {
    console.log("hej");
});
startBtn.addEventListener("click", () => {});
vaserBtn.addEventListener("click", () => {
    console.log("hej");
});
tallrikarBtn.addEventListener("click", () => {
    console.log("hej");
});

cart.addEventListener("click", () => {
    console.log("hej");
});

//skapar en klass för produkt-korten
class Product {
    constructor(img, name, price, button, category) {
        this.img = img;
        this.name = name;
        this.price = price;
        this.button = button;
        this.category = category;
        productList.push(this);
    }

    //funktion som skapar produkt-diven med alla sina element
    namingProduct() {
        const div = document.createElement("div");
        div.classList.add("product-div");

        const productImg = document.createElement("img");
        productImg.src = this.img;
        productImg.innerHTML = this.img;
        productImg.classList.add("product-img");

        const productName = document.createElement("h3");
        productName.innerHTML = this.name;

        const productPrice = document.createElement("span");
        productPrice.innerHTML = this.price;

        const productBtn = document.createElement("button");
        productBtn.innerHTML = this.button;
        productBtn.classList.add("product-btn");

        div.appendChild(productImg);
        div.appendChild(productName);
        div.appendChild(productPrice);
        div.appendChild(productBtn);

        return div;
    }
}

const productList = [];
//skapar en ny product i klassen
const product1 = new Product(
    "photos/frontpagepic2.jpg",
    "Vas Nygren",
    1599,
    "Läs mer...",
    "skål"
);
const product2 = new Product(
    "photos/frontpagepic2.jpg",
    "Vas Svensson",
    1234,
    "Läs mer...",
    "skål"
);

const product3 = new Product(
    "photos/frontpagepic2.jpg",
    "Vas Karlsson",
    23455,
    "Läs mer...",
    "skål"
);
const tallrik1 = new Product(
    "photos/frontpagepic2.jpg",
    "Vas Karlsson",
    23455,
    "Läs mer...",
    "Tallrikar"
);

const filter = (category) => {
    productListEl.innerHTML = "";
    const specificProduct = productList.filter((p) => p.category === category);
    specificProduct.forEach((prod) => {
        productListEl.innerHTML += `<div class="product-div"> <img class="product-img"src= " ${prod.img}"> 
        <h3>${prod.name}</h3> <span>${prod.price}</span> <button class="product-btn">${prod.button}</button> </div>`;
    });
};
//funktion som filtrerar ut skålar
// skålarBtn.addEventListener("click", () => {
//     filter("skål");
// });
