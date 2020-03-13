'use strict';
import modalHelper from "./modules/modal/modal-helper";
import showTop from "./modules/top/top";
import slider from "./modules/slider/slider";
import mobMenu from "./modules/burger-menu/burger-menu";
import hidePresent from "./modules/present/present";
import actionSubMenu from "./modules/sub-menu/sub-menu";

document.addEventListener('DOMContentLoaded', () => {
    const mainSlider = document.querySelector('.main-slider');
    modalHelper.actionModal();
    showTop();
    slider(mainSlider);
    mobMenu.actionMobMenu();
    mobMenu.stickMenu();
    hidePresent();
    actionSubMenu();
});


