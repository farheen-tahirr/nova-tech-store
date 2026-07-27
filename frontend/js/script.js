// ==========================
// SEARCH
// ==========================

const productsData = [

{
    name: "MacBook Air M4",
    category: "Laptop",
    page: "product-macbook.html"
},

{
    name: "iPhone 16 Pro",
    category: "Smartphone",
    page: "product-iphone.html"
},

{
    name: "AirPods Max",
    category: "Headphones",
    page: "product-headphones.html"
},

{
    name: "Apple Watch Series 10",
    category: "Smart Watch",
    page: "product-watch.html"
}

];

const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

if (searchInput && suggestions) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        suggestions.innerHTML = "";

        if (value === "") return;

        productsData.forEach(product => {

            if (
    product.name.toLowerCase().includes(value) ||
    product.category.toLowerCase().includes(value)
) {

                suggestions.innerHTML += `

                <div class="suggestion"
                onclick="location.href='${product.page}'">

                ${product.name}

                </div>

                `;

            }

        });

    });

}

// ==========================
// ADD TO CART
// ==========================

const buttons = document.querySelectorAll(".cart-btn");

buttons.forEach((button) => {

    button.addEventListener("click", function () {

        let product = {};

        // Product Details Page
        if (this.dataset.name) {

            product = {

                name: this.dataset.name,

                price: this.dataset.price

            };

        }

        // Homepage Product Card
        else {

            const card = this.parentElement;

            product = {

                name: card.querySelector("h3").innerText,

                price: card.querySelector(".price").innerText

            };

        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(product.name + " added to cart!");

    });

});