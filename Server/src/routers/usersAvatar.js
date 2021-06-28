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
  const { user_id, hair, eye, nose, mouth, body } = req.body;
  if (!user_id || !hair || !eye || !nose || !mouth || !body) {
    const err = new Error('username, password and email required');
    err.status = 400;
    throw err;
  }
  userAvatarModel
    .create(user_id, hair, eye, nose, mouth, body)
    .then((usersAvatar) => {
      res.json(usersAvatar);
    })
    .catch(next);
});

module.exports = router;
