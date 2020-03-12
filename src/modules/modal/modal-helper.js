class modalHelper {
    static actionModal() {
        document.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target;
            //console.log(target);
            if(target.dataset.popup) {
                const id = target.dataset.popup;
                document.querySelector(id).style.cssText = 'display: flex';
            } else if(target.closest('[data-popup]')) {
                const id = target.closest('[data-popup]').dataset.popup;
                document.querySelector(id).style.cssText = 'display: flex';
            }

            if(target.closest('.close-form') || target.matches('.overlay')) {
                target.closest('.popup').style.cssText = '';
            }

        });
    };
}

export default modalHelper;