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

// $(document).ready(function() {
//     $(window).on('scroll', function() {
//      if($(window).scrollTop() < 1000) {
//        $('.main-text').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
//     //    $('.main-text h1').css('top', 50 + ($(window).scrollTop() * .1) + '%');
//        $('.main-text h1').css('opacity', 1 - ($(window).scrollTop() * .003));
//      }
      
//       if($(window).scrollTop() >= $('.section').offset().top - 300) {
//         $('.nav-bg').removeClass('bg-hidden');
//         $('.nav-bg').addClass('bg-visible');
//       } else {
//         $('.nav-bg').removeClass('bg-visible');
//         $('.nav-bg').addClass('bg-hidden');
//       }
//    });
//  });