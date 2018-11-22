const AddPay = require('./add-pay');
const addPay = AddPay({
    token: process.env.TOKEN
});

async function createTransaction() {
    let transactionData = {
        "reference": "lendMe_003",
        "description": "lendMe transaction 3",
        "amount": {
            "value": 7352.25,
            "currency_code": "ZAR"
        },
        return_url: "https://addpay-callbacks.herokuapp.com/return",
        notify_url: "https://addpay-callbacks.herokuapp.com/notify"

    };

    let result = await addPay.createTransaction(transactionData)
    let transactionId = result.data.data.id;
    console.log(transactionId);

    return await addPay.associateTransactionWithCustomer(transactionId, '2e2bc70a-f78c-45b9-8666-43082ee7a2ee');

}

createTransaction()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));


// const customerData = {
//     "firstname": "Yegan",
//     "lastname": "Meister",
//     "email": "yegan@yeganmeister.org",
//     "mobile": "27811231234"
// };

// let createTransactionData = {
//     "reference": "codex_003",
//     "description": "codeX transaction 3",
//     "amount": {
//         "value": 1275.45,
//         "currency_code": "ZAR"
//     },
//     return_url: "https://addpay-callbacks.herokuapp.com/return",
//     notify_url: "https://addpay-callbacks.herokuapp.com/notify"
// };



// addPay.associateTransactionWithCustomer('37df6d58-767c-4402-9dc0-7b283c1da7ea', '2e2bc70a-f78c-45b9-8666-43082ee7a2ee')
//     .then((result) => console.log(result))
//     .catch(err => console.log(err));

// addPay
//     .getTransactions()
//     .then((results) => {
//         console.log(results.data);
//     })
//     .catch((err) => console.log(err));
