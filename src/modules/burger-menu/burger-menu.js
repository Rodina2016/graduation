class mobMenu {
    static actionMobMenu() {
        const popupMenu = document.querySelector('.popup-menu');
        let windowWidth = document.documentElement.clientWidth;
        window.addEventListener('resize', () => {
            windowWidth = document.documentElement.clientWidth;
        });
        document.addEventListener('click', (event) => {
            if (windowWidth < 768) {
                const target = event.target;
                if (target.parentNode.classList.contains('menu-button')) {
                    popupMenu.classList.toggle('show');
                } else if (target.parentNode.classList.contains('close-menu-btn') || target.parentNode.classList.contains('scroll')) {
                    popupMenu.classList.toggle('show');
                }
            }
        });
    };

    static stickMenu() {
        const topMenu = document.querySelector('.top-menu'),
            topMenuHeight = topMenu.clientHeight,
            headSlider = document.querySelector('.head-slider');
        let windowWidth = document.documentElement.clientWidth;
        document.addEventListener('scroll', () => {
            if (windowWidth < 768) {
                if (headSlider.getBoundingClientRect().y < topMenuHeight) {
                    topMenu.classList.add('fixed');
                } else if (headSlider.getBoundingClientRect().y > 0) {
                    topMenu.classList.remove('fixed');
                }
            }
        });
    };
}


export default mobMenu;