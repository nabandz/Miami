import Swiper from "swiper/bundle";

export function slider() {
    const sliderMain = new Swiper('.slider_main', {
        freeMode: true,
        centeredSlides: true,
        mousewheel: true,
        parallax: true,
        slideToClickedSlide: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            680: {
                slidesPerView: 3.5,
                spaceBetween: 60,
            }
        }
    });

    const sliderBg = new Swiper('.slider_bg', {
        centeredSlides: true,
        parallax: true,
        spaceBetween: 60,
        slidesPerView: 3.5,
    });

    sliderMain.controller.control = sliderBg;

    const sliderItems = document.querySelectorAll('.slider__item');
    sliderItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('slider__item_active')) {
                item.classList.remove('slider__item_active');
                return;
            }
            sliderItems.forEach(item => {
                item.classList.remove('slider__item_active');
            });
            item.classList.add('slider__item_active');
        });
    });
}