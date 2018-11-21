const express = require('express');
const app = express();
const axios = require('axios')
let BorrowerApi = require('./api/borrower-api');

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

const RequireRoutes = require('./routes/lendMeRoutes')

const requiredRoutes = RequireRoutes()
//let borrowerApi = BorrowerApi();
//app.use('/api/borrowers', borrowerApi.router);

app.get('/api', requiredRoutes.Customer);



var port = process.env.port || 3007;
app.listen(port, function(){
    console.log('running at port :' , port)
});
