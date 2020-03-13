const actionMobMenu = () => {
    const popupMenu = document.querySelector('.popup-menu');
    let windowWidth = document.documentElement.clientWidth;
    window.addEventListener('resize', () => {
        windowWidth = document.documentElement.clientWidth;
    });
    console.log(windowWidth);
    document.addEventListener('click', (event) => {
        if(windowWidth < 768) {
            const target = event.target;
            if (target.parentNode.classList.contains('menu-button')) {
                popupMenu.classList.toggle('show');
            } else if (target.parentNode.classList.contains('close-menu-btn') || target.parentNode.classList.contains('scroll')) {
                popupMenu.classList.toggle('show');
            }
        }
    });
};

export default actionMobMenu;