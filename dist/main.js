!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"actionModal",value:function(){document.addEventListener("click",(function(e){var t=e.target;if(t.dataset.popup){var n=t.dataset.popup;document.querySelector(n).style.cssText="display: flex"}else if(t.closest("[data-popup]")){var o=t.closest("[data-popup]").dataset.popup;document.querySelector(o).style.cssText="display: flex"}(t.closest(".close-form")||t.matches(".overlay"))&&(t.closest(".popup").style.cssText="",t.closest(".popup").querySelector(".form-content__wrap").classList.remove("hidden"),t.closest(".popup").querySelector(".message-form")&&t.closest(".popup").querySelector(".message-form").remove())}))}}],(n=null)&&o(t.prototype,n),r&&o(t,r),e}(),i=function(){var e=document.getElementById("totop"),t=document.querySelector(".head-slider"),n=t.clientHeight;e.style.cssText="display: none",t.getBoundingClientRect().y<-n&&(e.style.cssText=""),document.addEventListener("scroll",(function(){t.getBoundingClientRect().y<-n?e.style.cssText="":e.style.cssText="display: none"})),e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo(pageXOffset,0)}))},s=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.querySelectorAll(".slide"),i=0,s=function(e,t,n){e[t]&&e[t].classList.remove(n)},a=function(e,t,n){e[t]&&e[t].classList.add(n)},l=function(){var t=document.createElement("div");t.classList.add("dots"),r.forEach((function(){var e=document.createElement("div");e.classList.add("dot"),e.classList.add("dot"),t.append(e)})),e.insertAdjacentElement("beforeend",t);var n=e.querySelectorAll(".dot");n&&n[0].classList.add("dot-active")},c=function(){var t=document.createElement("div");t.classList.add("arrows");var n=document.createElement("div");n.classList.add("arrow-left"),n.classList.add("arrow-item"),n.setAttribute("id","#arrow-left");var o=document.createElement("div");o.classList.add("arrow-right"),o.classList.add("arrow-item"),o.setAttribute("id","#arrow-right"),t.insertAdjacentElement("beforeend",n),t.insertAdjacentElement("beforeend",o),e.insertAdjacentElement("beforeend",t)},d=function(){var t=e.querySelectorAll(".dot");s(r,i,"active"),s(t,i,"dot-active"),++i>=r.length&&(i=0),a(r,i,"active"),a(t,i,"dot-active")};e.addEventListener("click",(function(t){t.preventDefault();var n=e.querySelectorAll(".dot"),o=t.target;o.matches(".arrow-right, .arrow-left, .dot")&&(s(r,i,"active"),s(n,i,"dot-active"),o.matches(".arrow-right")?i++:o.matches(".arrow-left")?i--:o.matches(".dot")&&n.forEach((function(e,t){e===o&&(i=t)})),i>=r.length&&(i=0),i<0&&(i=r.length-1),a(r,i,"active"),a(n,i,"dot-active"))})),e.addEventListener("mouseover",(function(e){(e.target.matches(".arrow-item")||e.target.matches(".dot"))&&f()})),e.addEventListener("mouseout",(function(e){(e.target.matches(".arrow-item")||e.target.matches(".dot"))&&u()}));var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;t=setInterval(d,e)},f=function(){clearInterval(t)};n&&l(),o&&c(),u(2500)};function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,o=[{key:"actionMobMenu",value:function(){var e=document.querySelector(".popup-menu"),t=document.documentElement.clientWidth;window.addEventListener("resize",(function(){t=document.documentElement.clientWidth})),document.addEventListener("click",(function(n){if(t<768){var o=n.target;(o.parentNode.classList.contains("menu-button")||o.parentNode.classList.contains("close-menu-btn")||o.parentNode.classList.contains("scroll"))&&e.classList.toggle("show")}}))}},{key:"stickMenu",value:function(){var e=document.querySelector(".top-menu"),t=e.clientHeight,n=document.querySelector(".head-slider"),o=document.documentElement.clientWidth;document.addEventListener("scroll",(function(){o<768&&(n.getBoundingClientRect().y<t?e.classList.add("fixed"):n.getBoundingClientRect().y>0&&e.classList.remove("fixed"))}))}}],(n=null)&&a(t.prototype,n),o&&a(t,o),e}(),c=function(){var e=document.getElementById("gift");document.addEventListener("click",(function(t){var n=t.target;n.parentNode.classList.contains("fixed-gift")&&(n.parentNode.style.cssText="display: none"),n.classList.contains("close-btn")&&n.closest("#gift")&&(e.style.cssText="")}))},d=function(){document.addEventListener("click",(function(e){var t=e.target,n=document.querySelector(".club-select"),o=document.querySelector(".club-select.opened");t.closest(".club-select")&&!t.closest("ul.show")?(n.classList.toggle("opened"),n.querySelector("ul").classList.toggle("show")):o&&!t.closest(".club-select.opened")&&(n.classList.toggle("opened"),o.querySelector("ul").classList.toggle("show"))}))};function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function e(t){var n=t.main,o=t.wrap,r=t.next,i=t.prev,s=t.position,a=void 0===s?0:s,l=t.slidesToShow,c=void 0===l?3:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=c,this.options={position:a,widthSlide:Math.floor(100/this.slidesToShow)}}var t,n,o;return t=e,(n=[{key:"init",value:function(){this.addClass(),this.addStyle(),this.prev&&this.next&&this.controlSlider()}},{key:"addClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e=!0,t=!1,n=void 0;try{for(var o,r=this.slides[Symbol.iterator]();!(e=(o=r.next()).done);e=!0)o.value.classList.add("glo-slider__item")}catch(e){t=!0,n=e}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}},{key:"addStyle",value:function(){var e=document.createElement("style");e.id="sliderCarousel-style",e.textContent="\n            .glo-slider {overflow:hidden}\n            .glo-slider__wrap {display: flex; max-width: 100%; transition: transform .5s; will-change: transform;}\n            .glo-slider__item {flex: 0 0 ".concat(this.options.widthSlide,"%!important;margin: auto 0!important;}\n        "),document.head.appendChild(e)}},{key:"prevSlider",value:function(){this.options.position>0&&(--this.options.position,this.wrap.style.transform="translateX(".concat(-this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){this.options.position<this.slides.length-this.slidesToShow&&(++this.options.position,this.wrap.style.transform="translateX(".concat(-this.options.position*this.options.widthSlide,"%)"))}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}}])&&u(t.prototype,n),o&&u(t,o),e}();var p=function(e){e.addEventListener("input",(function(t){e.value=e.value.replace(/[a-zA-Z]/g,"")}))};function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=function(e){var t=document.createElement("div");t.classList.add("message-form"),e.addEventListener("submit",(function(r){r.preventDefault(),e.appendChild(t);var i=new FormData(e),s={};i.forEach((function(e,t){s[t]=e})),n(s,(function(){e.closest(".popup")?(e.querySelector(".form-content__wrap").classList.add("hidden"),t.textContent="Спасибо, мы скоро свяжемся с вами!",o(e)):(t.textContent="Спасибо, мы скоро свяжемся с вами!",setTimeout((function(){t.textContent=""}),2e3),o(e))}),(function(n){t.textContent="Что-то пошло не так...",setTimeout((function(){t.textContent=""}),2e3),o(e),console.error(n)}))}));var n=function(e,n,o){var r=new XMLHttpRequest;r.addEventListener("readystatechange",(function(){4===r.readyState?200===r.status?n():o(r.status):t.textContent="Отправляется..."})),r.open("POST","/server.php"),r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify(e))},o=function(e){var t=e.querySelectorAll("input");(t=(t=v(t)).filter((function(e){return"submit"!==e.getAttribute("type")}))).forEach((function(e){e.value=""}))}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".main-slider"),t=document.getElementById("gallery").querySelector(".gallery-slider"),n=document.querySelectorAll("[type=tel]"),o=document.querySelectorAll("[type=text]"),a=document.querySelectorAll("form");r.actionModal(),i(),s(e),s(t,!0,!0),l.actionMobMenu(),l.stickMenu(),c(),d(),new f({main:".services-slider",wrap:".services-slider__wrap",prev:"#slide-left",next:"#slide-right",slidesToShow:5}).init(),n.forEach((function(e){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function n(e){var n=e.keyCode,o=t,r=o.replace(/\D/g,""),i=this.value.replace(/\D/g,""),s=0,a=o.replace(/[_\d]/g,(function(e){return s<i.length?i.charAt(s++)||r.charAt(s):e}));-1!=(s=a.indexOf("_"))&&(a=a.slice(0,s));var l=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=a),"blur"==e.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("blur",n)}(e)})),o.forEach((function(e){p(e)})),a.forEach((function(e){m(e)}))}))}]);