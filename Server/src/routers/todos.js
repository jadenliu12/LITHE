const express = require('express');
const bodyParser = require('body-parser');

const todosModel = require('../model/todos.js');
const accomplishModel = require('../model/accomplish.js');

const router = express.Router();

router.use(bodyParser.json());

// List
router.get('/todos', function (req, res, next) {
    todosModel
    .list(req.query.searchText)
    .then((todos) => {
      res.json(todos);
    })
    .catch(next);
});

// Create
router.post('/todos', function (req, res, next) {
  const { mood, text } = req.body;
  if (!mood || !text) {
    const err = new Error('Mood and text are required');
    err.status = 400;
    throw err;
  }
  todosModel
    .create(mood, text)
    .then((todos) => {
      res.json(todos);
    })
    .catch(next);
});

// accomplish
router.post(
  '/todos/:id',
  function (req, res, next) {
    const { id } = req.params;
    if (!id) {
      const err = new Error('Post ID is required');
      err.status = 400;
      throw err;
    }
    accomplishModel
      .create(id)
      .then((todos) => {
        res.json(todos);
      })
      .catch(next);
  }
);

module.exports = router;
