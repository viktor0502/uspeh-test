import counter from "./counter";
function showAnimation(){
  function commonCounter() {
    counter(15, "years", 1);
    counter(10000, "number-of-clients", 50);
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

    export default showAnimation