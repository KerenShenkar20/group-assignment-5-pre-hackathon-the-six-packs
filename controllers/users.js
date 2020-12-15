const express = require('express');
const { userModel } = require("../model/users");
const { validUser } = require("../validation/users");


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

const createUser = async (req, res) => {
    try {
        let valid = validUser(req.body);
        if (!valid.error) {
            try {
                let data = await userModel.insertMany([req.body]);
                res.json(data)
            }
            catch (err) {
                res.status(400).json({ message: "user already in system ", code: "duplicate" });
            }
        }
        else {
            res.status(400).json(valid.error.details);
        }
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const readUser = async(req, res) => {
    try {
        let userId = req.params.id;
        userModel.findOne({ _id: userId })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const updateUser =async(req, res) => {
    try {
        let userId = req.params.id;
        let valid = validUser(req.body);
        if (!valid.error) {
            try {
                let data = await userModel.updateOne({ _id: userId }, req.body);
                res.json(data);
            }
            catch (err) {
                res.status(400).json({ message: "user already in system ", code: "duplicate" });
            }
        }
        else {
            res.status(400).json(valid.error.details);
        }
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}


const deleteUser = async (req, res) => {
    try {
        let userId = req.params.id;
        //delete user
        userModel.deleteOne({ _id: userId }, (err, data) => {
            if (err) { res.status(400).json(err) }
            res.json(data);
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}


module.exports = {
    getUsers,
    createUser,
    readUser,
    updateUser,
    deleteUser
};