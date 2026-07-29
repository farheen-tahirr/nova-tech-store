// ==========================
// LOGIN SYSTEM
// ==========================

const form = document.getElementById("login-form");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        if (response.ok) {

            // Save JWT token
            localStorage.setItem("token", data.token);

            // Save logged in user
            localStorage.setItem(
    "loggedInUser",
    JSON.stringify(data.user)
);

            alert("Login Successful!");

            window.location.href = "index.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.error(error);
        alert("Cannot connect to server.");

    }
});