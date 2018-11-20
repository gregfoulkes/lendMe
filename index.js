const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');

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

app.use(flash());

app.get('/', function(req,res) {

  res.send('Lend Me')

} );

var port = process.env.port || 3007;
app.listen(port, function(){
    console.log('running at port :' , port)
});
