const express = require('express');
const { userModel } = require("../model/users");

const getUsers = async (req, res) => {
  try {
    userModel.find({}, { email: 1, user: 1 })
      .then(data => { res.json(data); })
      .catch(err => { res.status(400).json(err); })
  }
  catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    })
  }
}


module.exports = {
    getUsers

};