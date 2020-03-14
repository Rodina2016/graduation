'use strict';
import modalHelper from "./modules/modal/modal-helper";
import showTop from "./modules/top/top";
import slider from "./modules/slider/slider";
import mobMenu from "./modules/burger-menu/burger-menu";
import hidePresent from "./modules/present/present";
import actionSubMenu from "./modules/sub-menu/sub-menu";
import SliderCarousel from "./modules/slider/slider-carousel";

document.addEventListener('DOMContentLoaded', () => {
    const mainSlider = document.querySelector('.main-slider'),
        gallery = document.getElementById('gallery').querySelector('.gallery-slider'),
        servicesSlider = document.querySelector('.services-slider');
    modalHelper.actionModal();
    showTop();
    slider(mainSlider);
    slider(gallery, true, true);
    mobMenu.actionMobMenu();
    mobMenu.stickMenu();
    hidePresent();
    actionSubMenu();

    const carousel = new SliderCarousel({
        main: ".services-slider",
        wrap: ".services-slider__wrap",
        prev: "#slide-left",
        next: "#slide-right",
        slidesToShow: 5,
    });
    carousel.init();
});


