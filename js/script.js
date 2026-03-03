/* =========================================================
   Master JavaScript: script.js
   ---------------------------------------------------------
   Software Development Bootcamp COurse
   Assignment # 1: Personal Website
   ---------------------------------------------------------
   Student: Mohsen Ghazel
   Professional Digital Portfolio 
   =========================================================
   Structure:
   ---------------------------------------------------------
   Part 1  : Contact Form
   ========================================================= */

   /* =========================================================
   Part 1: Contact Form:
   ========================================================= */
// Event handler
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you! Your message has been received.");
        });
    }

});

// Form input validation
function validateForm() {
    // Initialize the form-validation flag
    let isValid = true;
    // The name-field user entered input
    const name = document.forms["contactForm"]["name"].value;
    // The email-field user entered input
    const email = document.forms["contactForm"]["email"].value;
    // The message-field user entered input
    const message = document.forms["contactForm"]["message"].value;

    // Initialize the possible flagged errors 
    const errors = { nameError: "", emailError: "", messageError: "" };

    // Check if name is empty
    if (name === "") { errors.nameError = "Name required."; isValid = false; }
    // Check if email follows the expected email formation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { errors.emailError = "Invalid email."; isValid = false; }
    // Check if the message is empty
    if (message === "") { errors.messageError = "Message required."; isValid = false; }
    // Flag any error and throw an exception
    document.getElementById("nameError").textContent = errors.nameError;
    document.getElementById("emailError").textContent = errors.emailError;
    document.getElementById("messageError").textContent = errors.messageError;

    // Return valid input if no errors
    return isValid;
}

