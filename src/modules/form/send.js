const sendForm = (form) => {
    const processMessage = 'Идет отправка',
        errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо, мы скоро свяжемся с вами!';

    const statusMessage = document.createElement('div');
    statusMessage.classList.add('message-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        const bodyData = {};
        formData.forEach((val, ind) => {
            bodyData[ind] = val;
        });

        form.appendChild(statusMessage);
        postData(bodyData,
            () => {
                if(form.closest('.popup')) {
                    statusMessage.textContent = successMessage;
                    form.closest('.popup').querySelector('form').remove();
                    console.log( form.closest('.popup').querySelector('.form-content'));
                    const elem = form.closest('.popup').querySelector('.form-content');
                    elem.append(statusMessage);

                } else {
                    statusMessage.textContent = successMessage;
                }

            },
            (error) => {
                statusMessage.textContent = errorMessage;
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
        })
        request.open('POST','/server.php', false);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(data));

    }
}

export default sendForm;