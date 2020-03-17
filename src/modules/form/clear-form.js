const clearForm = (form) => {
    let allInputs =  form.querySelectorAll('input');
    allInputs = [...allInputs];
    allInputs = allInputs.filter((item) => {
        return item.getAttribute('type') !== 'submit'
            && item.getAttribute('type') !== 'hidden'
            && item.getAttribute('name') !== 'card-type'
            && item.getAttribute('name') !== 'club-name';
    });

    allInputs.forEach(item => {
        item.checked = false;
        item.value = '';
    });

    if(form.classList.contains('form-calc')) {
        form.querySelectorAll('[name=card-type]')[0].checked = true;
        form.querySelectorAll('[name=club-name]')[0].checked = true;
    }
};

export default clearForm;