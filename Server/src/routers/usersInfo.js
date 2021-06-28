const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const userInfoModel = require('../model/usersInfo.js');

const router = express.Router();

router.use(express.json());

// List
router.get('/usersInfo', function (req, res, next) {
    userInfoModel
    .list()
    .then((usersInfo) => {
      res.json(usersInfo);
    })
    .catch(next);
});

// Create
router.post('/usersInfo', function (req, res, next) {
  const { username, weight, height } = req.body;
  console.log(req.body);
  if (!username || !weight || !height) {
    const err = new Error('username, weight, height required');
    err.status = 400; 
    throw err;
  }
  userInfoModel
    .create(username, weight, height)
    .then((usersInfo) => {
      res.json(usersInfo);
    })
    .catch(next);
});

module.exports = router;
