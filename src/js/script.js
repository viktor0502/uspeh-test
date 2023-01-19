/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function burgerMenu(burgerBtnSelector, navMenuSelector, linksSelector) {
    const burger = document.querySelectorAll("." + burgerBtnSelector),
      navMenu = document.querySelectorAll("." + navMenuSelector),
      link = document.querySelectorAll("." + linksSelector);
  
    const scrollLock = () => {
        document.body.style.overflow = "hidden";
      },
      scrollUnclock = () => {
        document.body.style.overflow = "";
      },
      menuOpen = () => {
        navMenu.forEach((menu) => {
          menu.classList.add(navMenuSelector + "--active");
          scrollLock();
        });
      },
      menuClose = () => {
        navMenu.forEach((menu) => {
          menu.classList.remove(navMenuSelector + "--active");
          scrollUnclock();
        });
      };
  
    burger.forEach((burger) => {
      burger.addEventListener(`click`, () => {
        burger.classList.toggle(burgerBtnSelector + "--active");
        if (burger.classList.contains(burgerBtnSelector + "--active")) {
          menuOpen();
        } else {
          menuClose();
        }
      });
    });
    link.forEach((i) => {
      i.addEventListener(`click`, () => {
        burger.forEach((burger) => {
          burger.classList.remove(burgerBtnSelector + "--active");
          menuClose();
        });
      });
    });
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);

/***/ }),

/***/ "./src/js/modules/counter.js":
/*!***********************************!*\
  !*** ./src/js/modules/counter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function counter(num, elem, step) {
    const time = 1500;
    let l = document.querySelector("." + elem);
    let n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
      n = n + step;
      if (n >= num) {
        clearInterval(interval);
      }
      l.innerHTML = n;
      if(n >= 100){
        l.innerHTML = n
      }
      l.classList.add("over");
    }, t);

  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);

/***/ }),

/***/ "./src/js/modules/show-animation.js":
/*!******************************************!*\
  !*** ./src/js/modules/show-animation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ "./src/js/modules/counter.js");

function showAnimation(){
  function commonCounter() {
    (0,_counter__WEBPACK_IMPORTED_MODULE_0__["default"])(15, "years", 1);
    (0,_counter__WEBPACK_IMPORTED_MODULE_0__["default"])(10000, "number-of-clients", 50);
  }
    function onEntry(entry) {
      entry.forEach((change) => {
        if (change.isIntersecting) {
          change.target.classList.add("element-show");
        }
      });
    }
    let options = { threshold: [0.3] };
    let observer = new IntersectionObserver(onEntry, options);
    let observerCounter = new IntersectionObserver(counterEntry, options);
    let elements = document.querySelectorAll(".element-animation");
    let numbers = document.querySelectorAll(".number");
  
    for (let elm of elements) {
      observer.observe(elm);
    }
    for (let num of numbers) {
      observerCounter.observe(num);
    }
    function counterEntry(entry) {
      entry.forEach((change) => {
        if (change.isIntersecting && !change.target.classList.contains("over")) {
          commonCounter();
        }
      });
    }
    }

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAnimation);

/***/ }),

/***/ "./src/js/modules/smooth-scrolling.js":
/*!********************************************!*\
  !*** ./src/js/modules/smooth-scrolling.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function smoothScrolling(navLink){

    const anchors = document.querySelectorAll(navLink);
    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute("href").substr(1);
  
        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);

/***/ }),

/***/ "./src/js/modules/swiper.js":
/*!**********************************!*\
  !*** ./src/js/modules/swiper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function swiper(){
    const adSwiper = new Swiper(".ad__swiper", {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    const workSwiper = new Swiper(".work__swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(
    btnSelector,
    contentSelector,
    btnParentSelector,
    btnActiveSelector,
    contentActiveSelector
  ) {
    const tabsBtn = document.querySelectorAll("." + btnSelector),
      tabsContent = document.querySelectorAll("." + contentSelector),
      tabsBtnParent = document.querySelector("." + btnParentSelector);
    function hideTabs() {
      tabsContent.forEach((i) => {
        i.classList.remove(contentActiveSelector);
      });
      tabsBtn.forEach((i) => {
        i.classList.remove(btnActiveSelector);
      });
    }
    function showCurrentTab(i = 0) {
      tabsBtn[i].classList.add(btnActiveSelector);
      tabsContent[i].classList.add(contentActiveSelector);
    }

    hideTabs();
    showCurrentTab();
    tabsBtnParent.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.classList.contains(btnSelector)) {
        tabsBtn.forEach((item, i) => {
          if (target == item) {
            hideTabs();
            showCurrentTab(i);
          }
        });
      }
    });
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/swiper */ "./src/js/modules/swiper.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_smooth_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smooth-scrolling */ "./src/js/modules/smooth-scrolling.js");
/* harmony import */ var _modules_show_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/show-animation */ "./src/js/modules/show-animation.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");





window.addEventListener("DOMContentLoaded", () => {
  (0,_modules_swiper__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_1__["default"])("burger-btn", "navbar__menu", "navbar__link");
  (0,_modules_smooth_scrolling__WEBPACK_IMPORTED_MODULE_2__["default"])(".navbar__link");
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__["default"])(
    "price__btn-item",
    "price__contents-item",
    "price__btns",
    "price__btn-item--active",
    "price__contents-item--active"
  );
  (0,_modules_show_animation__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=script.js.map