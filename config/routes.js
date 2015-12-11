var express = require('express');
var validator = require('validator');
var Todo = require('./models/todo');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('main.html');
});

router.get('/todos', function(req, res, next) {
  var search = {};
  if (req.query.search) {
    search = {name: {$regex: new RegExp(req.query.search, 'i')}}
  }
  Todo.find(search).exec(function(err, todos) {
    if (err) return next(err);

    return res.status(200).json({
      todos: todos
    });
  })
});

router.post('/todos', function(req, res, next) {
  Todo.create({
    name: req.body.name
  }, function(err, todo) {
    if (err) return next(err);

    return res.status(201).json({
      todo: todo
    });
  });
});

router.get('/todos/:todoId', function(req, res, next) {
  Todo.findById(req.params.todoId, function(err, todo) {
    if (err) return next(err);

    return res.status(200).json({
      todo: todo
    });
  });
});

router.post('/todos/:todoId', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.todoId,
  { $set: {
    name: req.body.name,
    finished: req.body.finished
  }}, {new: true}).exec(function(err, todo) {
    if (err) return next(err);

    return res.status(200).json({
      todo: todo
    })
  });
});

router.delete('/todos/:todoId', function(req, res, next) {
  Todo.findById(req.params.todoId).remove(function(err) {
    if (err) return next(err);

    return res.status(200).json({
      message: 'Todo was removed.'
    })
  });
});

module.exports = router;
