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
  const { username, weight, height, calories, water, sleep } = req.body;
  if (!username || !weight || !height || !calories || !water || !sleep) {
    const err = new Error('username, password and email required');
    err.status = 400;
    throw err;
  }
  userInfoModel
    .create(username, weight, height, calories, water, sleep)
    .then((usersInfo) => {
      res.json(usersInfo);
    })
    .catch(next);
});

module.exports = router;
