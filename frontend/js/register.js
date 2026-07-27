const form = document.getElementById("register-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){

        alert("Passwords do not match!");

        return;

    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(user => user.email === email);

    if(userExists){

        alert("Email already registered!");

        return;

    }

    users.push({

        name,

        email,

        password

    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    window.location.href = "login.html";

});