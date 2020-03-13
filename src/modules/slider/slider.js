const slider = (slide, pagination = false, arrow = false) => {
    const slides = slide.querySelectorAll('.slide');
    let currentSlide = 0;
    let interval;

    const prevSlide = (elem, index, strClass) => {
        if(elem[index]) elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        if(elem[index]) elem[index].classList.add(strClass);
    };

    const initDots = () => {
        const dotsContainer = document.createElement('div');
        dotsContainer.classList.add('dots');
        slides.forEach(() => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.classList.add('dot');
            dotsContainer.append(dot);
        });
        slide.insertAdjacentElement('beforeend', dotsContainer);
        const dots = slide.querySelectorAll('.dot');
        if(dots) {
            dots[0].classList.add('dot-active');
        }
    };

    const initArrow = () => {
        const arrowBlock = document.createElement('div');
        arrowBlock.classList.add('arrows');

        const arrowLeft = document.createElement('div');
        arrowLeft.classList.add('arrow-left');
        arrowLeft.classList.add('arrow-item');
        arrowLeft.setAttribute('id','#arrow-left');

        const arrowRight = document.createElement('div');
        arrowRight.classList.add('arrow-right');
        arrowRight.classList.add('arrow-item');
        arrowRight.setAttribute('id','#arrow-right');

        arrowBlock.insertAdjacentElement('beforeend', arrowLeft);
        arrowBlock.insertAdjacentElement('beforeend', arrowRight);
        slide.insertAdjacentElement('beforeend', arrowBlock);
    };

    const autoPlaySlide = () => {
        const dots = slide.querySelectorAll('.dot');

            prevSlide(slides, currentSlide, 'active');
            prevSlide(dots, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            nextSlide(slides, currentSlide, 'active');
            nextSlide(dots, currentSlide, 'dot-active');

    };

    slide.addEventListener('click', (event) => {
        event.preventDefault();
        const dots = slide.querySelectorAll('.dot');
        let target = event.target;

        if(!target.matches('.arrow-right, .arrow-left, .dot')) {
            return;
        }

        prevSlide(slides, currentSlide, 'active');
        prevSlide(dots, currentSlide, 'dot-active');

        if (target.matches('.arrow-right')) {
            currentSlide++;
        } else if (target.matches('.arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dots.forEach((elem, ind) => {
                if (elem === target) {
                    currentSlide = ind;
                }
            })
        }

        if(currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if(currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'active');
        nextSlide(dots, currentSlide, 'dot-active');
    });

    slide.addEventListener('mouseover', (event) => {
        if(event.target.matches('.arrow-item') || event.target.matches('.dot')) {
            stopSlide();
        }
    });

    slide.addEventListener('mouseout', (event) => {
        if(event.target.matches('.arrow-item') || event.target.matches('.dot')) {
            startSlide();
        }
    });

    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    if(pagination) initDots();
    if(arrow) initArrow();
    startSlide(2500);

};

export default slider;