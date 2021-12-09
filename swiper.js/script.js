const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal', // or vertical
    // loop: true,

    effect: 'cards', // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'

    hashNavigation: true,

    autoplay: {
        delay: 5000,
      },

    // allowSlideNext: false,
    // allowSlidePrev: false,

    // allowTouchMove: false,

    // init: false,

    // initialSlide: 3,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // preloadImages: false,

    // preventClicks: true, // a tag

    
    slidesPerView: 3,


    spaceBetween: 20,

    // speed: 20,

    centeredSlides: true,

    centeredSlidesBounds: true,

    breakpointsBase: 'container',

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        }
    }
  });
  

swiper.on('slideChange', (e) => {
    console.log("swiper.isBeginning: ", swiper.isBeginning);
    console.log("swiper.isEnd: ", swiper.isEnd);
    console.log("swiper.slides: ", swiper.slides);
})

//   properties
// isBeginning, isEnd, slides

// methods
// destroy, slideNext(), slidePrev(), slideTo(i, s),

document.querySelector('.prev').onclick = () => {
    swiper.slidePrev()
}

document.querySelector('.next').onclick = () => {
    swiper.slideNext()
}

document.querySelector('.slideTo').onclick = () => {
    swiper.slideTo(3, 400)
}

// events
// afterInit, beforeInit, click, reachEnd, reachBeginning, slideChange,

// hash-routing


  