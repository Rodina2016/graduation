class SliderCarousel {
    constructor({main, wrap, next, prev, position = 2, slidesToShow = 3}) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            widthSlide: Math.floor(100/this.slidesToShow),
        }
    }

    init() {
        this.addClass();
        this.addStyle();
        if(this.prev && this.next) {
            this.controlSlider();
        }
    }

    addClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for(const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }

    addStyle() {
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
            .glo-slider {overflow:hidden}
            .glo-slider__wrap {display: flex; max-width: 100%; transition: transform .5s; will-change: transform;}
            .glo-slider__item {flex: 0 0 ${this.options.widthSlide}%!important;margin: auto 0!important;}
        `;
        document.head.appendChild(style);
    }

    prevSlider() {
        this.removeBeforeFirstElem();
    }

    removeBeforeFirstElem() {
        this.wrap.insertBefore(this.slides[this.slides.length - 1], this.slides[0]);
    }

    removeAfterLastElem() {
        this.wrap.appendChild(this.slides[0]);
    }

    nextSlider() {
        this.removeAfterLastElem();
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }
}

export default SliderCarousel;