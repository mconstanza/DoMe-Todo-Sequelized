// dependencies

var express = require('express');
var todo = require('../models/todo.js');
var models  = require('../models');

// create the express router
var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/todo');
});

router.get('/todo', function (req, res) {

  models.Todo.findAll()
    .then(function(todos){
      console.log(todos);
      var hbsObj = { todos: todos };
      console.log(hbsObj);
      res.render('index', hbsObj);
    });
});

router.post('/todo', function(req, res) {
  // todo.create(['item', 'completed'], [req.body.item, req.body.completed], function(){
  //   res.redirect('/todo');
  models.Todo.create(
    {
      item: req.body.item,
      completed: req.body.completed
    }
  )
  res.redirect('/todo');
});

router.put('/todo/:id', function(req,res) {

  models.Todo.findOne({ where: {id: req.params.id} })
    .then( function(todo) {
      if(todo) {
        todo.update({
          completed: req.body.completed
        })
      }
    })
    res.redirect('/todo');
});

router.delete('/todo/:id', function (req, res) {
  models.Todo.findOne({ where: {id: req.params.id} })
    .then( function(todo) {
      if(todo) {
        todo.destroy();
      }
      res.redirect('/todo');
    });
  });

module.exports = router;
