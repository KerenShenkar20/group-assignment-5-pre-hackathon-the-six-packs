const User = require('../model/users');

exports.userDBcontroller = {
    getUsers(req, res) {
        User.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
    getUser(req, res) {
        const query = req.query; 
        if(Object.keys(query).length == 0){
            User.findOne({ id: req.params.id })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting restaurant from db: ${err}`));
        }
        else if(query.name){
            User.findOne({ name: query.name })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting restaurant from db: ${err}`));
        }
    },
    addUser(req, res) {
        const {body} = req;
        const newRestaurant = new User(body);
        const result = newRestaurant.save();
        if (result) {
            res.json(newRestaurant)
        } else {
            res.status(404).send("Error saving a restaurant");
        }
    },
    deleteUser(req, res) {
        User.deleteOne({ id: req.params.id } ) 
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error deleting restaurant from db: ${err}`));
    },
    updateUser(req, res) {
        const {body} = req;
        User.updateOne({ id: req.params.id } , body ) 
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error updating restaurant from db: ${err}`));
    },
}