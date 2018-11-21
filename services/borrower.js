// const Connection = require('../config/database_connection')
// const pool = Connection();
module.exports = function borrower(pool){


    async function insertBorrower(firstname, lastname, email, mobile, customer_type){
        await pool.query('INSERT INTO customer(firstname, lastname, email, mobile, customer_type) values($1, $2, $3, $4, $5)',[firstname, lastname, email, mobile, customer_type]);
    }
    async function getByName(firstName){
        let results = await pool.query('select * from customer WHERE firstname = $1', [firstName]);
        return results.rows;
    }
    return{
        insertBorrower,
        getByName
    }
}
