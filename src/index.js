'use strict';
import modalHelper from "./modules/modal/modal-helper";
import showTop from "./modules/top/top";
import slider from "./modules/slider/slider";
import mobMenu from "./modules/burger-menu/burger-menu";
import hidePresent from "./modules/present/present";
import actionSubMenu from "./modules/sub-menu/sub-menu";

document.addEventListener('DOMContentLoaded', () => {
    const mainSlider = document.querySelector('.main-slider'),
        gallery = document.getElementById('gallery').querySelector('.gallery-slider');
    modalHelper.actionModal();
    showTop();
    slider(mainSlider);
    slider(gallery, true, true);
    mobMenu.actionMobMenu();
    mobMenu.stickMenu();
    hidePresent();
    actionSubMenu();
});


