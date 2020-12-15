const express = require('express');
const usersRouter = require('../routes/users.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const datapath = require('./data/data.json')
let total = 500;

// Server static assets 
app.all('*', function(req, res, next) {
    if (!req.get('Origin')) return next();
    res.set('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,x-auth-token,x-api-key');
    next();
});

//Routs Middlewares mmmk
app.use('/users', usersRouter);

  app.post('/user/create', (req, res) => {
    
    createUser(req, res)
})

app.get('/user/read:id', (req,res) => {

    readUser(req, res)
})

app.put('/user/update:id', (req, res) => {

    updateUser(req, res)
})


app.delete('/user/delete:id', (req, res) => {
    deleteUser(req, res)
})

  const readUser = (req, res) => {

    const usersList = datapath;
    res.send({sucsess: true, usersList})
  }
  
  const updateUser = (req, res) => {
    const usersList = datapath
    if (req.params.id < 0 || req.params.id > 500) {
        return res.send({error: true, msg: 'User not exist'})
    }
    const id = req.params.id
    usersList[id].first_name = req.params.first_name
    usersList[id].last_name = req.params.last_name
    usersList[id].email = req.params.email
    usersList[id].country = req.params.country
    usersList[id].avatar = req.params.avatar
    usersList[id].color = req.params.color   
    usersList[id].job = req.params.job 
    usersList.push(usersList[id])
    res.send({success: true, msg: 'User data updated successfully'})
}



//Listening on port 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log((`Server running on port ${port}`)));