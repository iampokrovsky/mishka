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