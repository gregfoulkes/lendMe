module.exports = function borrowerApiCall(){
    const express = require('express');
    let router = express.Router();

    router.get('/name/:borrowerName', async(req, res, next)=>{
        let username = req.params.borrowerName;
        res.status(200).json({
            message: 'Handling GET request returning the borrower information',
            firstName: username,
            lastName: "xxxx",
            email: "xxx@xxx.xxx",
            mobile: 0000000000,
            role: "borrowe"
        });
    });

    return{
        router
    }
} 