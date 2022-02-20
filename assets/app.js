'use strict';

this.pay = function () {
    var widget = new cp.CloudPayments();
       widget.pay('auth',
           {
               publicId: 'pk_d7d3076588bb7b619d4f72d7b21db',
               description: document.getElementById('input-description').value,
               amount: Number(document.getElementById('input-amount').value),
               currency: 'RUB',
               email: document.getElementById('input-email').value
           },
       )  
   };

document.getElementById('form').onsubmit = function (e) {
    e.preventDefault();
}

document.getElementById('input-button').onclick = function() {
    let description = document.getElementById('input-description').value;
    let email = document.getElementById('input-email').value;
    let amount = document.getElementById('input-amount').value;

    if ((description.length !=0) && (email.length !=0) && (amount.length !=0)) {
        pay();
    }        
}
