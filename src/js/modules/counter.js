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
  
  export default counter