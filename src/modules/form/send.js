const sendForm = (form) => {
    const processMessage = 'Отправляется...',
        errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо, мы скоро свяжемся с вами!';

    const statusMessage = document.createElement('div');
    statusMessage.classList.add('message-form');


    form.addEventListener('submit', event => {
        event.preventDefault();
        form.appendChild(statusMessage);
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
                    statusMessage.textContent = successMessage;

                    setTimeout(() => {
                        statusMessage.textContent = '';
                    }, 2000);

                    clearForm(form);
                }

            },
            (error) => {
                statusMessage.textContent = errorMessage;
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 2000);
                clearForm(form);
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
            item.value = '';
        })
    }
}

export default sendForm;