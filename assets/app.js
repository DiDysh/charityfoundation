'use strict';

const checkout = new cp.Checkout({
    publicId: 'pk_d7d3076588bb7b619d4f72d7b21db',
    container: document.getElementById("form")
})

checkout.createPaymentCryptogram()
    .then((cryptogram) => {
        console.log(cryptogram); // криптограмма
    }).catch((errors) => {
        console.log(errors)
    });

