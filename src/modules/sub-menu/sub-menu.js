 const actionSubMenu = () => {
    document.addEventListener('click', (event) => {
        const target = event.target;
        console.log(target.parentNode);
        if(target.closest('.club-select') && target.parentNode.querySelector('ul')) {
            target.parentNode.querySelector('ul').classList.toggle('show');
        };
    });
 };

 export default actionSubMenu;