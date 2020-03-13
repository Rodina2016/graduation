const showTop = () => {
    const totop = document.getElementById('totop'),
        headSlider = document.querySelector('.head-slider'),
        headerSliderHeight = headSlider.clientHeight;
    totop.style.cssText = 'display: none';

    if(headSlider.getBoundingClientRect().y < -headerSliderHeight) {
        totop.style.cssText = '';
    }

    document.addEventListener('scroll', () => {
        if(headSlider.getBoundingClientRect().y < -headerSliderHeight) {
            totop.style.cssText = '';
        } else {
            totop.style.cssText = 'display: none';
        }
    });

    totop.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo(pageXOffset, 0);
    });
};

export default showTop;