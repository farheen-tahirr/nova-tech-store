let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");

function displayCart() {

    cartItems.innerHTML = "";

    cart.forEach((product) => {

        cartItems.innerHTML += `

        <div style="padding:20px;border:1px solid gray;margin:20px;">

            <h2>${product.name}</h2>

            <p>${product.price}</p>

        </div>

        `;

    });

}

displayCart();