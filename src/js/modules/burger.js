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

  export default burgerMenu