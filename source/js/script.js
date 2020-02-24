var navButton = document.querySelector(".main-nav__button");
var nav = document.querySelector(".main-nav__content");
var orderButton = document.querySelectorAll(".button--order");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".page__overlay");

document.addEventListener('DOMContentLoaded', function () {
  if (navButton.classList.contains("main-nav__button--no-js") && nav.classList.contains("main-nav__content--no-js")) {
    navButton.classList.remove("main-nav__button--no-js");
    nav.classList.remove("main-nav__content--no-js");
  }
});

navButton.onclick = function (evt) {
  evt.preventDefault();

  if (!navButton.classList.contains("main-nav__button--close") && !nav.classList.contains("main-nav__button--open")) {
    navButton.classList.add("main-nav__button--close");
    nav.classList.add("main-nav__content--open");
  } else {
    navButton.classList.remove("main-nav__button--close");
    nav.classList.remove("main-nav__content--open");
  }
};

orderButton.onclick = function (evt) {
  evt.preventDefault();

  if (!modal.classList.contains("modal--open") && !overlay.classList.contains("page__overlay--open")) {
    modal.classList.add("modal--open");
    overlay.classList.add("page__overlay--open");
  }
};

overlay.onclick = function (evt) {
  if (modal.classList.contains("modal--open") && overlay.classList.contains("page__overlay--open")) {
    modal.classList.remove("modal--open");
    overlay.classList.remove("page__overlay--open");
  }
}