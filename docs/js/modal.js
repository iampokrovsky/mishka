var cartButtons = document.querySelectorAll(".product-card__cart-button");
var orderButtons = document.querySelectorAll(".button--order");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".page__overlay");
var modalFormInputS = document.querySelector(".modal__form-input--s");

function modalOpen() {
  if (!modal.classList.contains("modal--open") && !overlay.classList.contains("page__overlay--open")) {
    modal.classList.add("modal--open");
    overlay.classList.add("page__overlay--open");
    modalFormInputS.focus();
  }
}

for (var i = 0; i < orderButtons.length; i++) {
  orderButtons[i].onclick = function (evt) {
    evt.preventDefault();
    modalOpen();
  }
}

for (var i = 0; i < cartButtons.length; i++) {
  cartButtons[i].onclick = function (evt) {
    evt.preventDefault();
    modalOpen();
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
