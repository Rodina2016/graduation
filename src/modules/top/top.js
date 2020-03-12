const showTop = () => {
    const totop = document.getElementById('totop'),
        clubs = document.getElementById('clubs');
    totop.style.cssText = 'display: none';

    if(clubs.getBoundingClientRect().y < 0) {
        totop.style.cssText = '';
    }

    document.addEventListener('scroll', () => {
        if(clubs.getBoundingClientRect().y < 0) {
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