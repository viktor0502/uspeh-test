import swiper from "./modules/swiper";
import burgerMenu from "./modules/burger";
import smoothScrolling from "./modules/smooth-scrolling";
import showAnimation from "./modules/show-animation";
import tabs from "./modules/tabs";
window.addEventListener("DOMContentLoaded", () => {
  swiper();
  burgerMenu("burger-btn", "navbar__menu", "navbar__link");
  smoothScrolling(".navbar__link");
  tabs(
    "price__btn-item",
    "price__contents-item",
    "price__btns",
    "price__btn-item--active",
    "price__contents-item--active"
  );
  showAnimation();
});
