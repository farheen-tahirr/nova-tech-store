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
// CART COUNT
// ==========================

function updateCartCount() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {

        let total = 0;

        cart.forEach(item => {

            total += item.quantity || 1;

        });

        cartCount.innerText = total;

    }

}

// ==========================
// ADD TO CART
// ==========================

const buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(button => {

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

        const existingProduct = cart.find(item => item.name === product.name);

        if (existingProduct) {

            existingProduct.quantity = (existingProduct.quantity || 1) + 1;

        } else {

            product.quantity = 1;
            cart.push(product);

        }

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        alert(product.name + " added to cart!");

    });

});

// Load cart count when page opens
updateCartCount();
// ==========================
// USER LOGIN STATUS + LOGOUT
// ==========================

const userLink = document.getElementById("user-link");

const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
);


if(userLink && loggedInUser){


    userLink.innerHTML = `

        <i class="fa-solid fa-user"></i>

        ${loggedInUser.name} ▼

    `;


    userLink.href = "#";


    userLink.onclick = function(e){

        e.preventDefault();


        const confirmLogout = confirm(
            "Do you want to logout?"
        );


        if(confirmLogout){


            localStorage.removeItem(
                "loggedInUser"
            );


            window.location.href = "index.html";


        }

    };


}