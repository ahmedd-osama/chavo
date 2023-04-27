const heroSwiper = new Swiper('.hero-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 2000,
  freeMode: true,
  freeModeMomentum: false,
  freeModeMomentumBounce: false,
  autoplay: {
    delay: 0 ,
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
    delay: 0 ,
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

const menuSwiper = new Swiper('.menu-swiper',{
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
menuSwiper.on('slideChange', (e:any)=>{
  let activeIndex:any = e.activeIndex;
  var slides = e.slides;
  slides[activeIndex].classList.add('animated-slide');
  setTimeout(() => {
    slides[activeIndex].classList.remove('animated-slide');
  }, 2000);
})