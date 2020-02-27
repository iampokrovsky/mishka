var buttons = document.querySelector(".reviews__buttons");

document.addEventListener("DOMContentLoaded", function () {
  if (buttons.classList.contains("reviews__buttons--no-js")) {
    buttons.classList.remove("reviews__buttons--no-js");
  }
});

var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".reviews__button--next",
    prevEl: ".reviews__button--prev",
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  keyboard: {
    enabled: true,
  },
  a11y: {
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
    firstSlideMessage: "Это первый слайд",
    lastSlideMessage: "Это последний слайд",
  },
});