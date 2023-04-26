"use strict";
const heroSwiper = new Swiper('.hero-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 2000,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
    },
    slidesPerView: 'auto',
    breakpoints: {
        320: {
            spaceBetween: 30
        },
        480: {
            spaceBetween: 60
        },
        640: {
            spaceBetween: 60
        },
        992: {
            spaceBetween: 80
        }
    }
});
const heroSwiperR = new Swiper('.hero-swiper-r', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    speed: 2000,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
    },
    slidesPerView: 'auto',
    breakpoints: {
        320: {
            spaceBetween: 30
        },
        480: {
            spaceBetween: 60
        },
        640: {
            spaceBetween: 60
        },
        992: {
            spaceBetween: 80
        }
    }
});
