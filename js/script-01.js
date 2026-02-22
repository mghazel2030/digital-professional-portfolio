document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you! Your message has been received.");
        });
    }

});

function validateForm() {
    let isValid = true;
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const message = document.forms["contactForm"]["message"].value;
    const errors = { nameError: "", emailError: "", messageError: "" };

    if (name === "") { errors.nameError = "Name required."; isValid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { errors.emailError = "Invalid email."; isValid = false; }
    if (message === "") { errors.messageError = "Message required."; isValid = false; }

    document.getElementById("nameError").textContent = errors.nameError;
    document.getElementById("emailError").textContent = errors.emailError;
    document.getElementById("messageError").textContent = errors.messageError;

    return isValid;
}

