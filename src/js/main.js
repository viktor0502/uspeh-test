window.addEventListener("DOMContentLoaded", () => {
  // Swiper
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

  // Show-animation + counter

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }
  let options = { threshold: [0.1] };
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
  function counter(num, elem, step) {
    const time = 1000;
    let l = document.querySelector("." + elem);
    let n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
      n = n + step;
      if (n >= num) {
        clearInterval(interval);
      }
      l.innerHTML = n;
      l.classList.add("over");
    }, t);
  }
  function commonCounter() {
    counter(15, "years", 1);
    counter(10000, "number-of-clients", 100);
  }
 // Burger-menu
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
burgerMenu("burger-btn", "navbar__menu", "navbar__link")
  // Smooth scrolling

  const anchors = document.querySelectorAll(".nav__link");
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

  // Price

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
    console.log(tabsBtn, tabsContent, tabsBtnParent )
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
  
  tabs('price__btn-item', 'price__contents-item', 'price__btns', 'price__btn-item--active', 'price__contents-item--active')
});
