'use strict';
import modalHelper from "./modules/modal/modal-helper";
import showTop from "./modules/top/top";
import slider from "./modules/slider/slider";

document.addEventListener('DOMContentLoaded', () => {
    modalHelper.actionModal();
    showTop();

   const mainSlider = document.querySelector('.main-slider');
   slider(mainSlider);
});


