import clearForm from "./clear-form";

const sendForm = (form) => {
    const processMessage = 'Отправляется...',
        errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо, мы скоро свяжемся с вами!',
        thanks = document.getElementById('thanks'),
        toast = document.getElementById('toast');


    const statusMessage = document.createElement('div');
    statusMessage.classList.add('message-form');

    const showToast = (text, classStyle = 'foo') => {
        toast.textContent = text;
        toast.classList.remove('error');
        toast.classList.add('show');
        if(classStyle) toast.classList.add(classStyle);

        setTimeout(() => {
            toast.classList.remove('show');
        }, 1500);
    };

    const validForm = (form) => {
        const check = form.querySelector('[type=checkbox]');
        const radio = form.querySelectorAll('[type=radio]');
        let count = 0;

        if(check && !check.checked) {
            showToast('Необходимо принять соглашение', 'error');
            return false;
        };
        if(radio.length > 0) {
            radio.forEach(item => {
                if(item.checked) {
                    count++
                }
            })
            if(!count) {
                showToast('Необходимо выбрать клуб', 'error');
                return false;
            }
            return true;
        }

        return true;
    }

    form.addEventListener('submit', event => {
        event.preventDefault();
        form.appendChild(statusMessage);
        if(!validForm(form)) {
            return;
        }

        const formData = new FormData(form);
        const bodyData = {};
        formData.forEach((val, ind) => {
            bodyData[ind] = val;
        });

        postData(bodyData,
            () => {
                if(form.closest('.popup')) {
                    toast.classList.remove('show');
                    form.querySelector('.form-content__wrap').classList.add('hidden');
                    statusMessage.textContent = successMessage;
                    clearForm(form);
                } else {
                    toast.classList.remove('show');
                    statusMessage.textContent = '';
                    thanks.style.cssText = 'display: block';
                    clearForm(form);
                }

            },
            (error) => {
                if(form.closest('.popup')) {
                    showToast(errorMessage, 'error');
                } else {
                    statusMessage.textContent = errorMessage;
                    thanks.querySelector('.form-content').insertBefore(statusMessage, thanks.querySelector('.form-content__wrap'));
                    thanks.querySelector('.form-content__wrap').classList.add('hidden');
                    thanks.style.cssText = 'display: block';
                }
                console.error(error);
            });
    });

    const postData = (data, outputData, errorData) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {

            if (request.readyState !== 4) {
                showToast(processMessage);
                return;
            }

            if (request.status === 200) {
                outputData();
            } else {
                errorData(request.status);
            }
        });
        request.open('POST','/server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(data));
    }

};

export default sendForm;