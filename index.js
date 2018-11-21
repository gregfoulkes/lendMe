const express = require('express');
const app = express();
const axios = require('axios')
const BorrowerServices = require('./services/borrower');
let BorrowerApi = require('./api/borrower-api');

let pg = ('pg')

const bodyParser = require('body-parser');
const session = require('express-session');

//database config
const Config = require('./config/database_connection')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
  secret: '@pp Factori3',
  resave: false,
  saveUninitialized: true
}))

// const RequireRoutes = require('./routes/lendMeRoutes')

// const requiredRoutes = RequireRoutes()

let pool = Config()
let borrowerServices = BorrowerServices(pool);
let borrowerApi = BorrowerApi(borrowerServices);

 app.use('/api/borrowers', borrowerApi.router);
//app.use('/borrowers', borrowerApi.router);

// let lendmeroutes = lendmeroutes

// app.get('api/createcustomer', borr )
// app.get('/api', requiredRoutes.Customer);
//await spool.query('select * from customer')




var port = process.env.port || 3007;
app.listen(port, function(){
    console.log('running at port :' , port)
});
