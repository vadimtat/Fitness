import Swiper, {Navigation, A11y} from 'swiper';

export function initSwiper() {
  const trainers = new Swiper('.trainer__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    modules: [Navigation, A11y],
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
  const comments = new Swiper('.comment__swiper', {
    // Optional parameters
    direction: 'horizontal',
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    modules: [Navigation, A11y],
    navigation: {
      nextEl: '.comment__next',
      prevEl: '.comment__prev',
    },
  });
  return [comments, trainers];
}
