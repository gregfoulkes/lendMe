module.exports =
    function borrowerApiCall(borrowerServices) {

        const express =
            require('express');

        let router = express.Router();

        //get user by name

        router.get('/name/:borrowerName',
            async (req,
                res,
                next) => {

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

        router.get('/mobile/:userMobile',
            async (req,
                res,
                next) => {

                let userMobile =
                    Number(req.params.userMobile);

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

        router.post('/createcustomer',
            async (req,
                res,
                next) => {

                let {

                    customer

                } = req.body

                console.log(customer)

                //creating a new customer

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

        router.post('/createtransaction',
            async (req,
                res,
                next) => {

                // let {transaction} = req.body;

                let transaction = {

                    "reference": "lendMe_096",

                    "description": "lendMe transaction 60",

                    "amount": {

                        "value": 7452.25,

                        "currency_code": "ZAR"

                    }

                }

                try {

                    res.status(201).json({

                        message: 'Handling Post request, customer transaction',

                        data: transaction

                    });

                } catch (err) {

                    next(err);

                }

            });



        return {

            router

        }

    }