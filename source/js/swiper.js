export function initSwiper() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    slidesPerView: 4,
    spaceBetween: 40,

    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is <= 480px
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is <= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}
