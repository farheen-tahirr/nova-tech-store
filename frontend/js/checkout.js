const form = document.getElementById("checkout-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("🎉 Your order has been placed successfully!");

    localStorage.setItem("cart", JSON.stringify([]));

    window.location.href = "index.html";

});