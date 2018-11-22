// const axios = require('axios');
// const AddPay = require('./add-pay');
// const addPay = AddPay({
//     token: process.env.TOKEN
// });

// let URL = process.env.URL || 'http://localhost:3007';



// async function createTransaction(transactionData) {
//     let data = ()=>{
//         return axios.post(URL+'/api/borrowers/createtransaction')
//     }
//     await data()
//     .then(async (results)=>{
//         console.log(results.data.data)
//         let transactionData = results.data.data;
//         let result = await addPay.createTransaction(transactionData)
//         let transactionId = result.data.data.id;
//         console.log(transactionId);

//     })
//     .catch((err)=>{
//         console.error(err);
//     })

//     // let result = await addPay.createTransaction(transactionData)
//     // let transactionId = result.data.data.id;
//     // console.log(transactionId);
//     //return await addPay.associateTransactionWithCustomer(transactionId, '2e2bc70a-f78c-45b9-8666-43082ee7a2ee');
// }

// createTransaction()
//     .then((result) => {
        
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// async function createCustomer(){    
//     let data = ()=>{
//         return axios.get(URL+'/api/borrowers/name/Andrew')
//     }
//     await data()
//     .then(async (result)=>{
//         let response = result.data.data;
//         let customerData = {
//             firstname: response[0].firstname,
//             lastname: response[0].lastname,
//             email: response[0].email,
//             mobile: ''+response[0].mobile+''
//             // return_url: "https://addpay-callbacks.herokuapp.com/return",
//             // notify_url: "https://addpay-callbacks.herokuapp.com/notify" 
//         }
//         console.log(customerData);
//         let results = await addPay.createCustomer(customerData)
//         let customerId = results.data.data.id;
//         console.log(customerId);
//     })
//     .catch((err)=>{
//         console.error(err);
//     })
// }
// createCustomer();

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
