module.exports = function () {
    var postgres = require('pg')
    const Pool = postgres.Pool

    let useSSL = false;
    if (process.env.DATABASE_URL) {
        useSSL = true;
    }

    const connectionString = process.env.DATABASE_URL || 'postgresql://busisile:pg123@localhost:5432/lendme'

    const pool = new Pool({
        connectionString,
        ssl: useSSL
    })

    return pool;

}