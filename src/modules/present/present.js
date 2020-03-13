const hidePresent = () => {
    const gift = document.getElementById('gift');
    document.addEventListener('click', (event) => {
        const target = event.target;

        if(target.parentNode.classList.contains('fixed-gift')) {
            target.parentNode.style.cssText = 'display: none';
        }

        if(target.classList.contains('close-btn') && target.closest('#gift')) {
            gift.style.cssText = '';
        }
    });
};

export default hidePresent;