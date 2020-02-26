var controls = document.querySelector(".reviews__controls");

document.addEventListener("DOMContentLoaded", function () {
  if (controls.classList.contains("reviews__controls--no-js")) {
    controls.classList.remove("reviews__controls--no-js");
  }
});

// var mySwiper = new Swiper('.swiper-container', {
//   // Optional parameters
//   // direction: 'vertical',
//   // loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// })

// var swiper = new Swiper('.swiper-container', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
})

var quotesSwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

quotesSwiper.init();