var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".header__list");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
});
