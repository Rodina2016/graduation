const sendForm = (form) => {
    const processMessage = 'Отправляется...',
        errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо, мы скоро свяжемся с вами!',
        thanks = document.getElementById('thanks');

    const statusMessage = document.createElement('div');
    statusMessage.classList.add('message-form');

    const validForm = (form) => {
        const check = form.querySelector('[type=checkbox]');
        const radio = form.querySelectorAll('[type=radio]');
        let count = 0;

        if(check && !check.checked) {
            statusMessage.textContent = 'Необходимо принять соглашение';
            return false;
        };
        if(radio.length > 0) {
            radio.forEach(item => {
                if(item.checked) {
                    count++
                }
            })
            console.log(count);
            if(!count) {
                statusMessage.textContent = 'Необходимо выбрать клуб';
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
                    form.querySelector('.form-content__wrap').classList.add('hidden');
                    statusMessage.textContent = successMessage;
                    clearForm(form);
                } else {
                    statusMessage.textContent = '';
                    thanks.style.cssText = 'display: block';
                    clearForm(form);
                }

            },
            (error) => {
                if(form.closest('.popup')) {
                    statusMessage.textContent = errorMessage;
                    setTimeout(() => {
                        statusMessage.textContent = '';
                    }, 2000);
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
                statusMessage.textContent = processMessage;
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

    const clearForm = (form) => {
        let allInputs =  form.querySelectorAll('input');
        allInputs = [...allInputs];
        allInputs = allInputs.filter((item) => {
            return item.getAttribute('type') !== 'submit';
        });

        allInputs.forEach(item => {
            item.checked = false;
            item.value = '';
        })
    }
}

export default sendForm;