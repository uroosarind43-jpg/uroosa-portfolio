
// Welcome Message
console.log("Welcome to Uroosa Rind's Portfolio!");

// Smooth Navigation
document.querySelectorAll('.navbar a').forEach(function(link) {

    link.addEventListener('click', function() {

        console.log("Navigating to: " + link.textContent);

    });

});

// Current Year Automatically
let footer = document.querySelector("footer p:last-child");

footer.textContent =
    "© " + new Date().getFullYear() +
    " Uroosa Rind. All Rights Reserved.";

// Welcome Animation
window.addEventListener("load", function() {

    document.querySelector(".hero").classList.add("loaded");

});
