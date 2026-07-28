// ==========================
// CHECKOUT
// ==========================

// Get logged-in user
const currentUser = JSON.parse(
    localStorage.getItem("loggedInUser")
);

// Redirect to login if no user is logged in
if (!currentUser) {

    alert("Please login to continue.");

    window.location.href = "login.html";

}

// Get form fields
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const form = document.getElementById("checkout-form");

// Auto-fill logged-in user details
if (currentUser) {

    fullName.value = currentUser.name;
    email.value = currentUser.email;

}

// Handle form submission
form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get cart items
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    // Create order object
    const order = {

        orderId: "NOVA-" + Date.now(),

        customer: document.getElementById("fullName").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        address: document.getElementById("address").value,

        paymentMethod: document.getElementById("paymentMethod").value,

        items: cart,

        orderDate: new Date().toLocaleString()

    };

    // Get existing orders
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Save new order
    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear cart
    localStorage.removeItem("cart");

    // Update cart count
    localStorage.setItem("cart", JSON.stringify([]));

    // Success message
    alert(
        "🎉 Order placed successfully!\n\nOrder ID: " +
        order.orderId
    );

    // Redirect to homepage
    window.location.href = "index.html";

});