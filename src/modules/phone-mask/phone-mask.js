class MaskPhone {
    constructor(elem, mask) {
        this.elem = elem;
        this.mask = mask;
        this.valueInput = '',
        this.firstPosition = 0,
        this.number = {
            '49': 1,
            '97': 1,
            '98': 2,
            '50': 2,
            '99': 3,
            '51': 3,
            '100': 4,
            '52': 4,
            '101': 5,
            '53': 5,
            '102': 6,
            '54': 6,
            '103': 7,
            '55': 7,
            '104': 8,
            '56': 8,
            '105': 9,
            '57': 9,
        }
    }

    init() {
        this.showMask();
        this.enterNumber();
        this.getPosition();
    }

    showMask() {
        this.valueInput = this.mask.replace(/9/g, ' ');
        this.elem.addEventListener('focus', () => {
            this.elem.value = this.valueInput.replace(/X/g, ' ');
            this.setFirstPosition();
        });
    }

    setFirstPosition() {
        this.elem.setSelectionRange(this.firstPosition,this.firstPosition);
        this.elem.addEventListener('mouseup', (event) => {
            this.elem.setSelectionRange(this.firstPosition, this.firstPosition);
        });
    }

    enterNumber() {
        console.log(this.valueInput);
        this.elem.addEventListener('input', () => {
            if(this.elem.value === '') {
                //this.elem.value = this.mask;
            }

        });

        this.elem.addEventListener('keyup', (event) => {
           const currentNum = this.number[event.keyCode];
           if(currentNum !== undefined) {
               this.valueInput = this.valueInput.replace(/X/, currentNum);
               this.elem.value = this.valueInput.replace(/X/g, ' ');
               this.getPosition();
               this.setFirstPosition();
           } else if(event.keyCode === 8) {

           }
        })
    }

    getPosition() {
        this.firstPosition = this.valueInput.indexOf('X');
        return this.valueInput.indexOf('X');
    }
}

export default MaskPhone;