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
        console.log(firstName)
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
    //GET customer with the rating and balance
    async function getCustomerBalance(mobile){
        let results = await pool.query('select * from customer WHERE mobile = $1', [mobile]);
        if(results.rows.length > 0){
            let user = results.rows[0];
            let user_id = user.id;
            let resultsBalance = await pool.query('select customer.firstname, customer.lastname,customer.mobile, borrowers_table.trust_rate, borrowers_table.amount_owed from borrowers_table join customer on borrowers_table.customer_id = customer.id where customer.id=$1;', [user_id]);
            return resultsBalance.rows;
        }     
    }
    return{
        insertBorrower,
        getByName,
        getCustomerBalance
    }
}
