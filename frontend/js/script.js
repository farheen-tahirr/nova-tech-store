const buttons = document.querySelectorAll(".cart-btn");

buttons.forEach((button) => {
    button.addEventListener("click", function () {

        const card = this.parentElement;

        const product = {
            name: card.querySelector("h3").innerText,
            price: card.querySelector(".price").innerText
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(product.name + " added to cart!");
    });
});