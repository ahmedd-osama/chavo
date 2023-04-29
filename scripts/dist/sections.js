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
        disableOnInteraction: false,
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
        disableOnInteraction: false,
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
// Menu section
const menuSwiper = new Swiper('.menu-swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
menuSwiper.on('slideChange', (e) => {
    let activeIndex = e.activeIndex;
    var slides = e.slides;
    slides[activeIndex].classList.add('animated-slide');
    setTimeout(() => {
        slides[activeIndex].classList.remove('animated-slide');
    }, 2000);
});
// gallery section
const lightbox = GLightbox({
    selector: ".glightbox3",
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});
// gallery section
const reviewsSwiper = new Swiper('.reviews-wedgit.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 150,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    parallax: true,
});
reviewsSwiper.on('slideChange', (e) => {
    var _a;
    let activeIndex = e.activeIndex;
    var slides = e.slides;
    console.log(document.querySelector('#meal-img'));
    (_a = document.querySelector('#meal-img')) === null || _a === void 0 ? void 0 : _a.setAttribute('src', slides[activeIndex].getAttribute('data-img-href'));
});
// 
