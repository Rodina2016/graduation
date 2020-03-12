const slider = (slide) => {
    const slides = slide.querySelectorAll('.slide');
    let currentSlide = 0;
    let interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slides, currentSlide, 'active');
        //prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'active');
        //nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time);
    };

    startSlide(2500);

};

export default slider;