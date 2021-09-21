// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")



// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// var navBar = document.getElementById("navbar");


// if(document.readyState !== 'loading') {
//     openNav();
//     closeNav();
// } else {
//     document.addEventListener('DOMContentLoaded', function () {
//         openNav();
//         closeNav();
//     });
// };


// function openNav() {
//     const navLinks = document.querySelector(".nav-ul");
//     const hamburgerIcon = document.querySelector("#open-nav");
//     const closeIcon = document.querySelector("#close-nav");
//     const nav = document.querySelector(".navbar-links");
//     hamburgerIcon.addEventListener('click', function() {
//         nav.classList.add("open");
//         navLinks.style.display = "block";
//         hamburgerIcon.style.display = "none";
//         closeIcon.style.display = "block";
//         console.log("HAMBURGER ICON WAS CLICKED!");
//     });
// };

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector(".nav-ul");
    const hamburgerIcon = document.querySelector("#open-nav");
    const closeIcon = document.querySelector("#close-nav");
    const nav = document.querySelector(".navbar-links");
    const links = document.querySelectorAll(".navlink");

    hamburgerIcon.addEventListener('click', function() {
        openNav();
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.stopPropagation();
                closeNav();
            });
        });
    });

    closeIcon.addEventListener("click", closeNav);

    function openNav() {
        nav.classList.add("open");
        navLinks.style.display = "block";
        hamburgerIcon.style.display = "none";
        closeIcon.style.display = "block";
    };

    function closeNav() {
        nav.classList.remove("open");
        navLinks.style.display = "none";
        hamburgerIcon.style.display = "block";
        closeIcon.style.display = "none";
    };
});

// window.onscroll = function () {
//     var navBar = document.getElementById("navbar");
//     if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500 ) {
//         navBar.classList.add("nav-colored");
//         navBar.classList.remove("nav-transparent");
//     } 
//     else {
//         navBar.classList.add("nav-transparent");
//         navBar.classList.remove("nav-colored");
//     }
// };

