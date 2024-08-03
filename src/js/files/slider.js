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
        nextEl: ".hero-product__slider-btn--next"
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
        slideChange: ({activeIndex}) => {
          buttonsPagination.forEach(btn => btn.classList.remove("active"));
          buttonsPagination[activeIndex].classList.add("active")
        }
      },
      breakpoints: {
        768: {
          pagination: {
            el: ".hero-product__slider-pagination--images",
            clickable: true,
            type: "custom",
            bulletClass: "hero-product__pagination-btn",
          },
        }
      }
    });
  }

  const applySlider = document.querySelector(".apply__slider");

  if (applySlider && window.matchMedia("(max-width: 1595px)").matches) {
    const swiper = new Swiper(".apply__slider", {
      // speed: 700,
      // modules: [Autoplay],
      // autoplay: true,
      // grabCursor: true,
      // slidesPerView: 2,
      // spaceBetween: 20
    });
  }
}
