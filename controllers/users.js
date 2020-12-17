const User = require('../model/users');

exports.userDBcontroller = {
    getUsers(req, res) {
        User.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
    getUser(req, res) {
        User.findOne({id: Number(req.params.id)}) 
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting user from db: ${err}`));
    },
    deleteUser(req, res) {
        User.deleteOne({ id: Number(req.params.id) }) 
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error deleting User from db: ${err}`));
    },
    updateUser(req, res) {
        const {body} = req;
        User.updateOne({ id: Number(req.params.id) } , body ) 
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error updating User from db: ${err}`));
    },
}