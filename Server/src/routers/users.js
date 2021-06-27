const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const userModel = require('../model/users.js');

const router = express.Router();

router.use(express.json());

// Create
router.post('/users', function (req, res, next) {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    const err = new Error('username, password and email required');
    err.status = 400;
    throw err;
  }
  userModel
    .create(username, password, email)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

module.exports = router;
