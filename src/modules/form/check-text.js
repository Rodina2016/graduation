const checkText = (elem) => {
    elem.addEventListener('input', (event) => {
        elem.value = elem.value.replace(/[a-zA-Z0-9\`\~\=\@\#\$\%\^\&\*\(\)\\\/\-\+\.\,\№\;\:\_\!\"\'\?\<\>]/g, '');
    });
};

export default checkText;