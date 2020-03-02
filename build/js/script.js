var navButton = document.querySelector(".main-nav__button");
var navContent = document.querySelector(".main-nav__content");

document.addEventListener("DOMContentLoaded", function () {
  if (navButton.classList.contains("main-nav__button--hidden") && !navContent.classList.contains("main-nav__content--closed")) {
    navButton.classList.remove("main-nav__button--hidden");
    navContent.classList.add("main-nav__content--closed");
  }
});

navButton.onclick = function (evt) {
  evt.preventDefault();

  if (!navButton.classList.contains("main-nav__button--close") && !navContent.classList.contains("main-nav__content--open")) {
    navButton.classList.add("main-nav__button--close");
    navContent.classList.add("main-nav__content--open");
  } else {
    navButton.classList.remove("main-nav__button--close");
    navContent.classList.remove("main-nav__content--open");
  }
};
var orderButton = document.querySelector(".button--order");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".page__overlay");
var modalFormInputS = document.querySelector(".modal__form-input--s");

orderButton.onclick = function (evt) {
  evt.preventDefault();

  if (!modal.classList.contains("modal--open") && !overlay.classList.contains("page__overlay--open")) {
    modal.classList.add("modal--open");
    overlay.classList.add("page__overlay--open");
    modalFormInputS.focus();
  }
}

overlay.onclick = function (evt) {
  if (modal.classList.contains("modal--open") && overlay.classList.contains("page__overlay--open")) {
    modal.classList.remove("modal--open");
    overlay.classList.remove("page__overlay--open");
  }
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (modal.classList.contains("modal--open") && overlay.classList.contains("page__overlay--open")) {
      modal.classList.remove("modal--open");
      overlay.classList.remove("page__overlay--open");
    }
  }
});