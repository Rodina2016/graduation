!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,c;return t=e,c=[{key:"actionModal",value:function(){document.addEventListener("click",(function(e){e.preventDefault();var t=e.target;if(t.dataset.popup){var n=t.dataset.popup;document.querySelector(n).style.cssText="display: flex"}else if(t.closest("[data-popup]")){var o=t.closest("[data-popup]").dataset.popup;document.querySelector(o).style.cssText="display: flex"}(t.closest(".close-form")||t.matches(".overlay"))&&(t.closest(".popup").style.cssText="")}))}}],(n=null)&&o(t.prototype,n),c&&o(t,c),e}(),r=function(){var e=document.getElementById("totop"),t=document.getElementById("clubs");e.style.cssText="display: none",t.getBoundingClientRect().y<0&&(e.style.cssText=""),document.addEventListener("scroll",(function(){t.getBoundingClientRect().y<0?e.style.cssText="":e.style.cssText="display: none"})),e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo(pageXOffset,0)}))},i=function(e){var t=e.querySelectorAll(".slide"),n=0,o=function(){var e;e="active",t[n].classList.remove(e),++n>=t.length&&(n=0),function(e,t,n){e[t].classList.add(n)}(t,n,"active")};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;setInterval(o,e)}(2500)};function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,o=[{key:"actionMobMenu",value:function(){var e=document.querySelector(".popup-menu"),t=document.documentElement.clientWidth;window.addEventListener("resize",(function(){t=document.documentElement.clientWidth})),document.addEventListener("click",(function(n){if(t<768){var o=n.target;(o.parentNode.classList.contains("menu-button")||o.parentNode.classList.contains("close-menu-btn")||o.parentNode.classList.contains("scroll"))&&e.classList.toggle("show")}}))}},{key:"stickMenu",value:function(){var e=document.querySelector(".top-menu"),t=e.clientHeight,n=document.querySelector(".head-slider");document.addEventListener("scroll",(function(){n.getBoundingClientRect().y<t?e.classList.add("fixed"):n.getBoundingClientRect().y>0&&e.classList.remove("fixed")}))}}],(n=null)&&a(t.prototype,n),o&&a(t,o),e}(),l=function(){var e=document.getElementById("gift");document.addEventListener("click",(function(t){var n=t.target;n.parentNode.classList.contains("fixed-gift")&&(n.parentNode.style.cssText="display: none"),n.classList.contains("close-btn")&&n.closest("#gift")&&(e.style.cssText="")}))};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".main-slider");c.actionModal(),r(),i(e),s.actionMobMenu(),s.stickMenu(),l()}))}]);