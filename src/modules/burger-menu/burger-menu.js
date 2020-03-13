const actionMobMenu = () => {
    const popupMenu = document.querySelector('.popup-menu');
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.parentNode.classList.contains('menu-button')) {
            popupMenu.classList.toggle('show');
        } else if (target.parentNode.classList.contains('close-menu-btn') || target.parentNode.classList.contains('scroll')) {
            popupMenu.classList.toggle('show');
        }
    });
};

export default actionMobMenu;