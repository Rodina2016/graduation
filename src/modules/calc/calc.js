const calc = () => {
    const dataObj = {
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
    };
    let club = document.querySelector('[name="club-name"]:checked').value;
    let type = document.querySelector('[name="card-type"]:checked').value;
    const cardOrder = document.getElementById('card_order');

    const setPrice = (club, type, promo = false) => {
        const priceTotal = document.getElementById('price-total');
        const price = +dataObj[club][type];
        if(promo) {
            priceTotal.textContent = Math.floor(price - price * 0.3);
        } else {
            priceTotal.textContent = price;
        }

    };

    setPrice(club, type);

    cardOrder.addEventListener('change', (event) => {
        const target = event.target;
        let promo = false;
        const promoCode = document.querySelector('.promo-code').value;

        if(target.matches('[name="club-name"]')) {
            club = target.value;
            console.log(club);

        } else if(target.matches('[name="card-type"]')) {
            type = target.value;
            console.log(type);
        }

        if(promoCode === 'ТЕЛО2020') {
            promo = true;
        }

        setPrice(club, type, promo);
    });
};

export default calc;