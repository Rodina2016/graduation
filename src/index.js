'use strict';
import modalHelper from "./modules/modal/modal-helper";
import showTop from "./modules/top/top";
import slider from "./modules/slider/slider";

document.addEventListener('DOMContentLoaded', () => {
    const mainSlider = document.querySelector('.main-slider');
    modalHelper.actionModal();
    showTop();
    slider(mainSlider);
});


