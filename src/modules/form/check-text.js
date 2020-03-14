const checkText = (elem) => {
    elem.addEventListener('input', (event) => {
        elem.value = elem.value.replace(/[a-zA-Z]/g, '');
    });
}

export default checkText;