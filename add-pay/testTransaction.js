const AddPay = require('.');
const addPay = AddPay({
    token: process.env.TOKEN
});

// async function createTransaction() {
//     let transactionData = {
//         "reference": "lendMe_006",
//         "description": "lendMe transaction 4",
//         "amount": {
//             "value": 1235.35,
//             "currency_code": "ZAR"
//         },
//         return_url: "https://addpay-callbacks.herokuapp.com/return",
//         notify_url: "https://addpay-callbacks.herokuapp.com/notify"
//     };
//     let result = await addPay.createTransaction(transactionData)
//     let transactionId = result.data.data.id;
//     console.log(transactionId);

//     return await addPay.associateTransactionWithCustomer(transactionId, '2e2bc70a-f78c-45b9-8666-43082ee7a2ee');

//     //return await addPay.createTransaction(transactionData)
// }

// createTransaction().then(function(result){console.log(result.data)}).catch(function(err){console.log(err)});

async function createTransaction() {
    const customerData = {
        "firstname": "Greg",
        "lastname": "Foulkes",
        "email": "greg@foulkes.org",
        "mobile": "27867831234",
        return_url: "https://addpay-callbacks.herokuapp.com/return",
        notify_url: "https://addpay-callbacks.herokuapp.com/notify"
    };
    let result = await addPay.createCustomer(customerData)
    //let transactionId = result.data.data.id;
    console.log(result);

    return await addPay.associateTransactionWithCustomer(transactionId, '2e2bc70a-f78c-45b9-8666-43082ee7a2ee');

    //return await addPay.createTransaction(transactionData)
}

createTransaction().then(function (result) {
    console.log(result.data)
}).catch(function (err) {
    console.log(err)
});