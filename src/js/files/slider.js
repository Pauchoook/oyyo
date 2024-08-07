import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

export default function slider() {
  const heroProductSlider = document.querySelector(".hero-product__slider");
  const buttonsPagination = document.querySelectorAll(".hero-product__pagination-btn");

  if (heroProductSlider) {
    const swiper = new Swiper(".hero-product__slider", {
      speed: 700,
      modules: [Pagination, Autoplay, Navigation],
      autoplay: true,
      grabCursor: true,
      navigation: {
        prevEl: ".hero-product__slider-btn--prev",
        nextEl: ".hero-product__slider-btn--next",
      },
      pagination: {
        el: ".hero-product__slider-pagination--number",
        type: "fraction",
      },
      on: {
        init: () => {
          const firstBtnPagination = document.querySelector(".hero-product__pagination-btn");
          firstBtnPagination.classList.add("active");
        },
        slideChange: ({ activeIndex }) => {
          buttonsPagination.forEach((btn) => btn.classList.remove("active"));
          buttonsPagination[activeIndex].classList.add("active");
        },
      },
      breakpoints: {
        768: {
          pagination: {
            el: ".hero-product__slider-pagination--images",
            clickable: true,
            type: "custom",
            bulletClass: "hero-product__pagination-btn",
          },
        },
      },
    });
  }

  const applySlider = document.querySelector(".apply__slider");

  if (applySlider) {
    const swiper = new Swiper(".apply__slider", {
      speed: 700,
      modules: [Autoplay],
      // autoplay: true,
      grabCursor: true,
      slidesPerView: "auto",
      slideToClickedSlide: true,
      spaceBetween: 6,
      breakpoints: {
        1440: {
          spaceBetween: 65,
        },
        480: {
          spaceBetween: 25,
        },
      },
    });
  }

  const agronomySlider = document.querySelector(".agronomy__slider");

  if (agronomySlider) {
    const swiper = new Swiper(".agronomy__slider", {
      speed: 700,
      modules: [Autoplay, Navigation, Pagination],
      autoplay: true,
      grabCursor: true,
      navigation: {
        prevEl: ".slider-btn--prev.agronomy__btn-slider",
        nextEl: ".slider-btn--next.agronomy__btn-slider",
      },
      pagination: {
        el: ".agronomy__slider-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `<span>0${current}</span> <span class="slider-nav__total">/0${total}</span>`;
        },
      },
    });
  }
  const centerSlider = document.querySelector(".center__slider");

  if (centerSlider) {
    const swiper = new Swiper(".center__slider", {
      speed: 700,
      modules: [Autoplay, Navigation, Pagination],
      // autoplay: true,
      grabCursor: true,
      spaceBetween: 20,
      navigation: {
        prevEl: ".slider-btn--prev.center__btn-slider",
        nextEl: ".slider-btn--next.center__btn-slider",
      },
      pagination: {
        el: ".center__slider-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          return `<span>0${current}</span> <span class="slider-nav__total">/0${total}</span>`;
        },
      },
    });
  }
}
