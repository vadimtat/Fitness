export function initSwiper() {
  const swiper = new Swiper('.trainer__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.trainer__next',
      prevEl: '.trainer__prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
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
  const swiperPrev = document.getElementById('trainerPrev');
  const swiperNext = document.getElementById('trainerNext');

  swiperPrev.addEventListener('click', () => {
    swiper.slidePrev();
  });
  swiperNext.addEventListener('click', () => {
    swiper.slideNext();
  });
}

export function initSwiper2() {
  const swiperTwo = new Swiper('.comment__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    spaceBetween: 40,
    navigation: {
      nextEl: '.comment__next',
      prevEl: '.comment__prev',
    },
  });
  const commentPrev = document.getElementById('commentPrev');
  const commentNext = document.getElementById('commentNext');

  commentPrev.addEventListener('click', () => {
    swiperTwo.commentPrev();
  });
  commentNext.addEventListener('click', () => {
    swiperTwo.commentNext();
  });
}
