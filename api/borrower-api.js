const AddPay = require('../add-pay/add-pay');
const addPay = AddPay({
    token: process.env.TOKEN
});
module.exports = function borrowerApiCall(borrowerServices) {
    const express = require('express');
    let router = express.Router();
    //get user by name
    router.get('/name/:borrowerName',
    async (req,res,next) => {
        let username = req.params.borrowerName;
        console.log(username)
        try {
            let data = await borrowerServices.getByName(username);
            res.status(200).json({
                message: 'Handling GET request returning the borrower information',
                data: data
            });
        } catch (err) {
            next(err);
        }
    });
    //get user's balance, here an inmput will be a mobile
    router.get('/mobile/:userMobile', async (req, res, next) => {
        let userMobile = Number(req.params.userMobile);
        console.log(userMobile)
        try {
            let data = await borrowerServices.getCustomerBalance(userMobile);
            res.status(200).json({
                message: 'Handling GET request returning the borrower information with balance',
                data: data
            });
        } catch (err) {
            next(err);
        }
    });
    router.post('/createcustomer', async (req,res,next) => {
        let {customer} = req.body
        try {
            await borrowerServices.insertBorrower(customer.firstname, customer.lastname, customer.email, customer.mobile, customer.customer_type);
            
            res.status(201).json({
                message: 'Handling Post request, adding a new customer',
                data: customer
            });
        } catch (err) {
            next(err);
        }
    });
    router.post('/createtransaction', async (req,res,next) => {
        let {transactionData} = req.body;
        try {
            let response = await addPay.createTransaction(transactionData);
            let addPayResponse = response.data;
            const meta = addPayResponse.meta;
            console.log(meta);

            let associateResponse = await addPay.associateTransactionWithCustomer(addPayResponse.data.id, 'd2bec028-e99d-4817-8364-3a892235bfcd')
            console.log(associateResponse.data);

            res.status(201).json({
                status: meta.status,
                payment_url: addPayResponse.data.direct,
                transaction_id: addPayResponse.data.id
            });
        }catch(err){
            console.log(err);
            next(err)
        }
    });
    
    return {
        router
    }
}