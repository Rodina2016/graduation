import clearForm from '../form/clear-form';

class modalHelper {
    static actionModal() {

        document.addEventListener('click', (event) => {
            const target = event.target;
            if(target.dataset.popup) {
                const id = target.dataset.popup;
                document.querySelector(id).style.cssText = 'display: flex';
            } else if(target.closest('[data-popup]')) {
                const id = target.closest('[data-popup]').dataset.popup;
                document.querySelector(id).style.cssText = 'display: flex';
            }

            if(target.closest('.close-form') || target.matches('.overlay') || target.matches('.btn.close-btn')) {
                target.closest('.popup').style.cssText = '';
                if( target.closest('.popup').querySelector('.form-content__wrap')) {
                    target.closest('.popup').querySelector('.form-content__wrap').classList.remove('hidden');
                }
                if(target.closest('.popup').querySelector('.message-form')) {
                    target.closest('.popup').querySelector('.message-form').remove();
                }

                if(target.closest('.popup').querySelector('.message-form')) {
                    target.closest('.popup').querySelector('.message-form').remove();
                }
                clearForm(target.closest('.popup').querySelector('form'));
            }

        });
    };
};

export default modalHelper;