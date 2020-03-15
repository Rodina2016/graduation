 const actionSubMenu = () => {
    document.addEventListener('click', (event) => {
        const target = event.target;
        const clubsSelect = document.querySelector('.club-select');
        const clubSelectOpened = document.querySelector('.club-select.opened');

        if (target.closest('.club-select') && !target.closest('ul.show')) {

            clubsSelect.classList.toggle('opened');
            clubsSelect.querySelector('ul').classList.toggle('show');

        } else if (clubSelectOpened && !target.closest('.club-select.opened')) {

            clubsSelect.classList.toggle('opened');
            clubSelectOpened.querySelector('ul').classList.toggle('show');
        }
    });
 };

 export default actionSubMenu;