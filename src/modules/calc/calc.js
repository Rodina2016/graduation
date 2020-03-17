class Calc {
    constructor(data = {
        'mozaika': {
            '1': 1999,
            '6': 9900,
            '9': 13900,
            '12': 19900,
        },
        'schelkovo': {
            '1': 2999,
            '6': 14990,
            '9': 21990,
            '12': 24990,
        },
    }) {
        this.data = data;
    }
    changeCalc(dataObj, cardOrder, club, type) {
        cardOrder.addEventListener('change', (event) => {
            const target = event.target;
            let promo = false;
            const promoCode = document.querySelector('.promo-code').value;

            if(target.matches('[name="club-name"]')) {
                club = target.value;

            } else if(target.matches('[name="card-type"]')) {
                type = target.value;
            }

            if(promoCode === 'ТЕЛО2020') {
                promo = true;
            }

            this.setPrice(dataObj, club, type, promo);
        });
    }

     setPrice (dataObj, club, type, promo = false) {
        const priceTotal = document.getElementById('price-total');
        const price = +dataObj[club][type];
        if(promo) {
            priceTotal.textContent = Math.floor(price - price * 0.3);
        } else {
            priceTotal.textContent = price;
        }

    };

    initCalc() {
        let club = document.querySelector('[name="club-name"]:checked').value;
        let type = document.querySelector('[name="card-type"]:checked').value;
        const cardOrder = document.getElementById('card_order');

        if(document.querySelector('.form-calc')) {
            this.setPrice(this.data, club, type);
            this.changeCalc(this.data, cardOrder, club, type);
        }
    }
};

export default Calc;