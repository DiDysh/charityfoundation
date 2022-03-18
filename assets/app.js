'use strict';

this.pay = function () {
    var widget = new cp.CloudPayments({language: "kk"});

    var data = {};
    data.CloudPayments = {
        recurrent: {
         interval: 'Month',
         period: 1, 
         }
         }; 
    var receipt = {
        Items: [//товарные позиции
             {
                label: 'Подписка', //наименование товара
                price: 200.00, //цена
                quantity: 1.00, //количество
                amount: 200.00, //сумма
                vat: 20,
                method: 1 //ставка НДС
            }
        ],
        taxationSystem: 0, //система налогообложения; необязательный, если у вас одна система налогообложения
        email: document.getElementById('input-email').value,
        amounts:
        {
            electronic: 200.00 // Сумма оплаты электронными деньгами
            
        }
    };

    var data = {};
    data.CloudPayments = {
        CustomerReceipt: receipt,
        recurrent: {
            interval: 'Month',
            period: 1, 
            customerReceipt: receipt //чек для регулярных платежей
            }
            
    };

       widget.pay('auth',
           {
               publicId: 'pk_d7d3076588bb7b619d4f72d7b21db',
               description: document.getElementById('input-description').value,
                amount: Number(document.getElementById('input-amount').value),
               currency: 'RUB',
            //    email: "test@test.com",
               accountId: document.getElementById('input-email').value,
               skin: "modern",
               requireEmail: false,
               data: data
           },
       )  
   };
// widget.auth(
//            {
//                publicId: 'pk_d7d3076588bb7b619d4f72d7b21db',
//                description: document.getElementById('input-description').value,
//                amount: "",
//                currency: 'RUB',
//                email: ""
//            },
//        )  
//    };

document.getElementById('form').onsubmit = function (e) {
    e.preventDefault();
}

document.getElementById('input-button').onclick = function() {
    let description = document.getElementById('input-description').value;
    let email = document.getElementById('input-email').value;
    let amount = document.getElementById('input-amount').value;

    if ((description.length !=0) && (email.length !=0)&& (amount.length !=0)) {
        pay();
    }        
}
