// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
// require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")



// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

divSlide = function () {
  const sections = document.querySelectorAll(".slide")
  
  document.addEventListener('scroll', () => {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top
      if (top <= 850) {
        section.classList.add('show')
        section.classList.remove('hide')

      } else {
        section.classList.add('hide')
        section.classList.remove('show')
      }
    });
  });
}

reviewsCarousel = function () {
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const track = document.querySelector('.track');
    const trackWidth = document.querySelector('.track-container').offsetWidth;
    let index = 0;

    next.addEventListener('click', () => {
        index ++;
        prev.classList.add('show');
        track.style.transform = `translateX(-${index * trackWidth}px)`;

        if (track.offsetWidth - (index * trackWidth) < trackWidth) {
            next.classList.add('hide');
        };
    });

    prev.addEventListener('click', () => {
        index --;
        next.classList.remove('hide');
        track.style.transform = `translateX(-${index * trackWidth}px)`;
        if (index === 0) {
            prev.classList.remove('show');
        }
    });
};

galleryCarousel = function () {
    const prev = document.querySelector('.prev-gallery');
    const next = document.querySelector('.next-gallery');
    const track = document.querySelector('.track-gallery');
    const galleryWidth = document.querySelector('.gallery-container').offsetWidth;
    let index = 0;

    next.addEventListener('click', () => {
        index ++;
        prev.classList.add('show');
        track.style.transform = `translateX(-${index * galleryWidth}px)`;

        if (track.offsetWidth - (index * galleryWidth) < galleryWidth) {
            next.classList.add('hide');
        };
    });

    prev.addEventListener('click', () => {
        index --;
        next.classList.remove('hide');
        track.style.transform = `translateX(-${index * galleryWidth}px)`;
        if (index === 0) {
            prev.classList.remove('show');
        }
    });
}

hamburger = function () {
    const navLinks = document.querySelector(".nav-ul");
    const hamburgerIcon = document.querySelector("#open-nav");
    const closeIcon = document.querySelector("#close-nav");
    const nav = document.querySelector(".navbar-links");
    const links = document.querySelectorAll(".navlink");

    hamburgerIcon.addEventListener('click', function() {
        openNav();
        links.forEach(link => {
            link.addEventListener('click', (event) => {
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
};

document.addEventListener('DOMContentLoaded', function () {
    reviewsCarousel();
    galleryCarousel();
    hamburger();
    divSlide();
});


// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelector(".nav-ul");
//     const hamburgerIcon = document.querySelector("#open-nav");
//     const closeIcon = document.querySelector("#close-nav");
//     const nav = document.querySelector(".navbar-links");
//     const links = document.querySelectorAll(".navlink");

//     hamburgerIcon.addEventListener('click', function() {
//         openNav();
//         links.forEach(link => {
//             link.addEventListener('click', (event) => {
//                 event.stopPropagation();
//                 closeNav();
//             });
//         });
//     });

//     closeIcon.addEventListener("click", closeNav);

//     function openNav() {
//         nav.classList.add("open");
//         navLinks.style.display = "block";
//         hamburgerIcon.style.display = "none";
//         closeIcon.style.display = "block";
//     };

//     function closeNav() {
//         nav.classList.remove("open");
//         navLinks.style.display = "none";
//         hamburgerIcon.style.display = "block";
//         closeIcon.style.display = "none";
//     };

//     const prev = document.querySelector('.prev');
//     const next = document.querySelector('.next');
//     const track = document.querySelector('.track');
//     const reviewsWidth = document.querySelector('.reviews-container').offsetWidth;

//     next.addEventListener('click', () => {
//         track.style.transform = 'translateX(-${reviewsWidth}px)';
//     })
// });

// Reviews carousel

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

