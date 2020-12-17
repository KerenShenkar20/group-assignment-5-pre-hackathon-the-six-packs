const { Router } = require('express');
const {userDBcontroller} = require('../controllers/users');

const UserRouter = new Router();

UserRouter.get('/',userDBcontroller.getUsers);            //localhostn:3000/api/retaurants
UserRouter.get('/:id',userDBcontroller.getUser);          //localhostn:3000/api/retaurants/5
UserRouter.put('/:id',userDBcontroller.updateUser);       //localhostn:3000/api/retaurants
UserRouter.delete('/:id',userDBcontroller.deleteUser);    //localhostn:3000/api/retaurants

module.exports = { UserRouter };