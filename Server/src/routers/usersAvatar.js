const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const userAvatarModel = require('../model/usersAvatar.js');

const router = express.Router();

router.use(express.json());

// List
router.get('/usersAvatar', function (req, res, next) {
    userAvatarModel
    .list()
    .then((usersAvatar) => {
      res.json(usersAvatar);
    })
    .catch(next);
});

// Create
router.post('/usersAvatar', function (req, res, next) {
  const { username, hair, eye, nose, mouth, body, gender } = req.body;
  console.log(req.body);
  if (!username || !hair || !eye || !nose || !mouth || !body) {
    const err = new Error('username, hair, eye, nose, mouth, body and gender required');
    err.status = 400;
    throw err;
  }
  userAvatarModel
    .create(username, hair, eye, nose, mouth, body, gender)
    .then((usersAvatar) => {
      res.json(usersAvatar);
    })
    .catch(next);
});

module.exports = router;
