const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const userModel = require('../model/users.js');

const router = express.Router();

router.use(express.json());

// List
router.get('/users', function (req, res, next) {
  userModel
    .list()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

// Create
router.post('/users', function (req, res, next) {
  const { username, email } = req.body;
  if (!username || !email) {
    const err = new Error('username, password and email required');
    err.status = 400;
    throw err;
  }
  userModel
    .create(username, email)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

module.exports = router;
