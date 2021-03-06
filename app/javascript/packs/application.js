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
    const carousel = document.querySelector('.carousel');
    const container = carousel.querySelector('.carousel-container');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const pagination = carousel.querySelector('.carousel-pagination');
    const bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
    const totalItems = 3;
    const reviewsWidth = document.querySelector('.carousel').offsetWidth;
    let currentIndex = 0;
    
    function next() {
        slideTo(currentIndex + 1);
    }
    
    function prev() {
        slideTo(currentIndex - 1);
    }
    
    function slideTo(index) {
        index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
        container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * reviewsWidth) + 'px)';
        bullets[currentIndex].classList.remove('active-bullet');
        bullets[index].classList.add('active-bullet');
        currentIndex = index;
    }
    
    bullets[currentIndex].classList.add('active-bullet');
    prevBtn.addEventListener('click', prev, false);
    nextBtn.addEventListener('click', next, false);
    
    pagination.addEventListener('click', function(e) {
        let index = bullets.indexOf(e.target);
        if (index !== -1 && index !== currentIndex) {
            slideTo(index);
        }
    }, false);
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
