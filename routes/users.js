const express = require('express');
const router = express.Router();
const control = require('../controllers/users')


/* GET all users */
router.get('/', async (req, res) => {
  control.getUsers(req,res);
});

module.exports = router;
