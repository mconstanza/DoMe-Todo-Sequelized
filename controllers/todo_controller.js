// dependencies

var express = require('express');
var todo = require('../models/todo.js');

// create the express router
var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/todo');
});

router.get('/todo', function (req, res) {
  todo.all(function (data) {
    var hbsObj = { todos: data };
    console.log(hbsObj);
    res.render('index', hbsObj);
  });
});

router.post('/todo', function(req, res) {
  todo.create(['item', 'completed'], [req.body.item, req.body.completed], function(){
    res.redirect('/todo');
  });
});

router.put('/todo/:id', function(req,res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  todo.update({completed: req.body.completed }, condition, function () {
    res.redirect('/todo');
  });
});

router.delete('/todo/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  todo.delete(condition, function() {
    res.redirect('/todo');
  });
});

module.exports = router;
