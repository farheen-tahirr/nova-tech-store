function updateCartCount(){

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCount = document.getElementById("cart-count");

    if(cartCount){

        let total = 0;

        cart.forEach(item => {

            total += item.quantity;

        });

        cartCount.innerText = total;

    }

}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");

function displayCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <h2 style="text-align:center;margin-top:40px;">
                Your Cart is Empty 🛒
            </h2>
        `;
        return;
    }

    let subtotal = 0;

    cart.forEach((product, index) => {

        let price = Number(product.price.replace(/[^\d]/g, ""));

        subtotal += price * product.quantity;

        cartItems.innerHTML += `

        <div class="cart-card">

            <h2>${product.name}</h2>

            <p>${product.price}</p>

            <div class="quantity">

                <button onclick="decreaseQuantity(${index})">−</button>

                <span>${product.quantity}</span>

                <button onclick="increaseQuantity(${index})">+</button>

            </div>

            <button class="remove-btn"
            onclick="removeItem(${index})">

                Remove

            </button>

        </div>

        `;

    });

    cartItems.innerHTML += `

    <div class="cart-total">

        <h2>Subtotal: Rs. ${subtotal.toLocaleString()}</h2>

        <br>

        <a href="index.html">

            <button class="continue-btn">

                Continue Shopping

            </button>

        </a>

       <a href="checkout.html">

<button class="checkout-btn">

Proceed to Checkout

</button>

</a>

    </div>

    `;

}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));
updateCartCount();
    displayCart();

}

displayCart();
function increaseQuantity(index){

    cart[index].quantity++;

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    displayCart();

}

function decreaseQuantity(index){

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }

    else{

        cart.splice(index,1);

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    displayCart();

}