'use strict';

document.getElementById('input-button').onclick = pay;
this.pay = function () {
    var widget = new cp.CloudPayments();
       widget.pay('auth',
           {
               publicId: 'pk_d7d3076588bb7b619d4f72d7b21db',
               description: document.getElementById('input-description').value,
               amount: Number(document.getElementById('input-number').value),
               currency: 'RUB',
               email: document.getElementById('input-email').value,
           },
       )
       
   };

document.getElementById('form').onsubmit = function() {
    return false;
}
