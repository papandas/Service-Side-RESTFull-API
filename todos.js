var express = require('express');
var router = express.Router();

var todoItems = [
    {id:1, desc: 'foo'},
    {id:2, desc: 'boo'},
    {id:3, desc: 'faz'},
];

router.get('/', function(req, res){
    res.render('index', {
        title: 'My App',
        items: todoItems
    });
});

router.post('/add', function (req, res){
    var newItem = req.body.newItem;
    console.log(newItem);
    todoItems.push({
        id: todoItems.length + 1,
        desc: newItem
    });

    res.redirect('/');
});

module.exports = router;