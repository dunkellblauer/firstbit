new Swiper('.swiper', {
    slidesPerView: 5,
    loop: true,

    loopedSlides: 3,

    slideToClickedSlide: true,

    navigation: {
        nextEl: '.auto-slider__next',
        prevEl: '.auto-slider__prev'
    },
});