// const Connection = require('../config/database_connection')
// const pool = Connection();
module.exports = function borrower(pool){

    async function insertBorrower(firstname, lastname, email, mobile, customer_type){
        if(firstname!=''&& lastname!=''&& email!='', mobile!=0){
            console.log(checkByEmail(email));
            if(await checkByEmail(email)){
                console.log('Already in the database');
            }else{
                await pool.query('INSERT INTO customer(firstname, lastname, email, mobile, customer_type) values($1, $2, $3, $4, $5)',[firstname, lastname, email, mobile, customer_type]);
            }
        }else{
            console.log('empty strings');
        }
    }
    //get the customer details
    async function getByName(firstName){
        let results = await pool.query('select * from customer WHERE firstname = $1', [firstName]);
        return results.rows;
    }
    //Check if the entry with parameter:email exist? return:true or false
    async function checkByEmail(email){
        let results = await pool.query('select * from customer WHERE email = $1', [email]);
        if(results.rows.length>0 ){
            return true;
        }else{
            return false;
        }
    }
    return{
        insertBorrower,
        getByName
    }
}
