const express = require('express');
const bodyParser = require('body-parser');
const accessController = require('../middleware/access-controller.js');

const userGroupModel = require('../model/userGroup.js');

const router = express.Router();

router.use(express.json());

// List
router.get('/usersGroup', function (req, res, next) {
    userGroupModel
    .list()
    .then((userGroup) => {
      res.json(userGroup);
    })
    .catch(next);
});

// Create
router.post('/usersGroup', function (req, res, next) {
  console.log("enter router");
  const { group_id, user_a, user_b, user_c, user_d, user_e, user_f, user_g, user_h } = req.body;
  if (!group_id || !user_a || !user_b || !user_c || !user_d || !user_e || !user_f || !user_g || !user_h) {
    const err = new Error('group_id, user_a, user_b, user_c, user_d, user_e, user_f, user_g and user_h required');
    err.status = 400;
    throw err;
  }
  userGroupModel
    .create(group_id, user_a, user_b, user_c, user_d, user_e, user_f, user_g, user_h)
    .then((userGroup) => {
      res.json(userGroup);
    })
    .catch(next);
});

module.exports = router;
