// class MaskPhone {
//     constructor(elem, mask) {
//         this.elem = elem;
//         this.mask = mask;
//         this.valueInput = '',
//         this.firstPosition = 0,
//         this.number = {
//             '49': 1,
//             '97': 1,
//             '98': 2,
//             '50': 2,
//             '99': 3,
//             '51': 3,
//             '100': 4,
//             '52': 4,
//             '101': 5,
//             '53': 5,
//             '102': 6,
//             '54': 6,
//             '103': 7,
//             '55': 7,
//             '104': 8,
//             '56': 8,
//             '105': 9,
//             '57': 9,
//         }
//     }
//
//     init() {
//         this.showMask();
//         this.enterNumber();
//         this.getPosition();
//     }
//
//     showMask() {
//         this.valueInput = this.mask.replace(/9/g, ' ');
//         this.elem.addEventListener('focus', () => {
//             if(this.elem.value === '') {
//                 this.valueInput = this.mask.replace(/9/g, ' ');
//                 this.elem.value = this.valueInput.replace(/X/g, ' ');
//                 this.setFirstPosition();
//             }
//         });
//     }
//
//     setFirstPosition() {
//         this.elem.setSelectionRange(this.firstPosition,this.firstPosition);
//         this.elem.addEventListener('mouseup', (event) => {
//             this.elem.setSelectionRange(this.firstPosition, this.firstPosition);
//         });
//     }
//
//     enterNumber() {
//         console.log(this.valueInput);
//         this.elem.addEventListener('input', () => {
//             if(this.elem.value === '') {
//                 //this.elem.value = this.mask;
//             }
//
//         });
//
//         this.elem.addEventListener('keyup', (event) => {
//            const currentNum = this.number[event.keyCode];
//            if(currentNum !== undefined) {
//                this.valueInput = this.valueInput.replace(/X/, currentNum);
//                this.elem.value = this.valueInput.replace(/X/g, ' ');
//                this.getPosition();
//                this.setFirstPosition();
//            } else if(event.keyCode === 8) {
//                 console.log(this.elem.value);
//                 if(this.elem.value === '') {
//                     console.log(this.mask);
//                     this.elem.value = this.mask.replace(/X/g, ' ');
//                     this.firstPosition = this.mask.indexOf('X');
//                     this.elem.setSelectionRange(this.firstPosition, this.firstPosition);
//                     this.valueInput = '';
//                 }
//            }
//         })
//     }
//
//     getPosition() {
//         this.firstPosition = this.valueInput.indexOf('X');
//         return this.valueInput.indexOf('X');
//     }
// }
//
// export default MaskPhone;

export default function maskPhone(elem, masked = '+7 (___) ___-__-__') {

    function mask(event) {
        const keyCode = event.keyCode;
        const template = masked,
            def = template.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        console.log(template);
        let i = 0,
            newValue = template.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
        i = newValue.indexOf("_");
        if (i != -1) {
            newValue = newValue.slice(0, i);
        }
        let reg = template.substr(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = newValue;
        }
        if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
        }

    }

    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
}