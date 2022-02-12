'use strict';

this.pay = function () {
    var widget = new cp.CloudPayments();
       widget.pay('auth',
           {
               publicId: 'test_api_00000000000000000000001', //id из личного кабинета
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
   
document.getElementById('input-button').onclick = pay;