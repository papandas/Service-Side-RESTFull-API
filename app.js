var express = require('express');

var app = express();

// Configure App

// User middleware

// Define Routes

app.get('/', function(req, res){
    res.send('Hello World')
});

app.listen(1337, function(){
    console.log('Localhost running on port 1337');
})