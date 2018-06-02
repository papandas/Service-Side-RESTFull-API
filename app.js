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

// Define Routes


var todoItems = [
    {id:1, desc: 'foo'},
    {id:2, desc: 'boo'},
    {id:3, desc: 'faz'},
];

app.get('/', function(req, res){
    res.render('index', {
        title: 'My App',
        items: todoItems
    });
});

app.post('/add', function (req, res){
    var newItem = req.body.newItem;
    console.log(newItem);
    todoItems.push({
        id: todoItems.length + 1,
        desc: newItem
    });

    res.redirect('/');
});


app.listen(1337, function(){
    console.log('Localhost running on port 1337');
})