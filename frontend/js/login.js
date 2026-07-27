// ==========================
// LOGIN SYSTEM
// ==========================

const form = document.getElementById("login-form");

form.addEventListener("submit", function(e){

    e.preventDefault();


    // Get input values
    const email = document.getElementById("email").value.trim().toLowerCase();

    const password = document.getElementById("password").value.trim();


    // Check empty fields
    if(email === "" || password === ""){

        alert("Please fill all fields!");

        return;

    }


    // Get registered users
    let users = JSON.parse(localStorage.getItem("users")) || [];


    // Find matching user
    const user = users.find(function(u){

        return (
            u.email.toLowerCase() === email &&
            u.password === password
        );

    });



    // Login successful
    if(user){


        // Save only required session data
        const loggedInUser = {

            name: user.name,

            email: user.email

        };


        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(loggedInUser)
        );


        alert("Login Successful!");


        // Redirect to homepage
        window.location.href = "index.html";


    }



    // Login failed
    else{

        alert("Invalid Email or Password!");

    }


});