import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';

document.addEventListener('DOMContentLoaded', () => {
  // Menú navegació mobile
  document.querySelector('.nav__toggle')?.addEventListener('click', () => {
    document.querySelector('.nav__list')?.classList.toggle('nav__list--visible');
  });

  // Inicialitzar Swiper
  Swiper.use([Navigation]);

  new Swiper('.carousel__swiper', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
});