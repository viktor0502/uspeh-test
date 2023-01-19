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

  export default tabs