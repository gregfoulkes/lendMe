module.exports = function borrowerApiCall(borrowerServices){
    const express = require('express');
    let router = express.Router();

    router.get('/name/:borrowerName', async(req, res, next)=>{
        let username = req.params.borrowerName;
        try{
            let data = await borrowerServices.getByName(username);
            res.status(200).json({
                message: 'Handling GET request returning the borrower information',
                data: data
            });
        }catch(err){
            next(err);
        }
    });

    router.post('/borrower', async (req, res, next) => {
        //creating a new customer
        try{
            await borrowerServices.insertBorrower(firstName, lastName, email, mobile, role);
            res.status(201).json({
                message: 'Handling Post request, adding a new customer',
                data: newCustomer
            });
        }catch(err){
            next(err);
        }
    });


    return{
        router
    }
} 