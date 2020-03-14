 const actionSubMenu = () => {
    document.addEventListener('click', (event) => {
        const target = event.target;

        if (target.parentNode.querySelector('ul') && !target.parentNode.querySelector('ul').classList.contains('show')
            && target.closest('.club-select')
            && target.parentNode.querySelector('ul')) {
            target.parentNode.querySelector('ul').classList.add('show');
        } else if (target.parentNode.querySelector('ul') && target.parentNode.querySelector('ul').classList.contains('show') && !target.closest('.show')) {
            target.parentNode.querySelector('ul').classList.remove('show');
        }
    });
 };

 export default actionSubMenu;