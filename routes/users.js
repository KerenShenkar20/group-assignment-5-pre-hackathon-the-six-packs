const express = require('express');
const router = express.Router();
const control = require('../controllers/users')


/* GET all users */
router.get('/', async (req, res) => {
  control.getUsers(req,res);
});

router.post("/user/:id", async (req, res) => {
  control.createUser(req, res);
})

router.post("/add", async (req, res) => {
  control.createUser(req, res);
})

router.put("/:id",authToken, async (req, res) => {
  control.updateUser(req, res);
})

router.delete("/:id",authToken, (req,res) => {
  control.deleteUser(req, res);
})


module.exports = router;
