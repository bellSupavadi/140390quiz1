var express = require('express');
var pgp = require('pg-promise')();
var app = express();

//app.use(express.static ('static') );
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('page/home');
        
    
    });




console.log('Appp is running at http://localhost:8080');          

app.listen(8080);