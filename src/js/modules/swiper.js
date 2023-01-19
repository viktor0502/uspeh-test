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

  export default swiper