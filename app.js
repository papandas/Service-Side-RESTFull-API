var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// Configure App
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// User middleware
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
        message: err.message, 
        error: err
    });
});

// Define Routes
app.use(require('./todos'));

app.listen(1337, function(){
    console.log('Localhost running on port 1337');
})