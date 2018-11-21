const Connection = require('../config/database_connection')

const pool = Connection()
let assert = require("assert");

describe('lendMe App', function(){

    it('should connect to the database', async function(){
        let result = await pool.query('select * from customer')
        console.log(result.rows)
    })
})