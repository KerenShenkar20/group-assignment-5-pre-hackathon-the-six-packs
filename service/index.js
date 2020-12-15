require('dotenv').config();
require('./server');
require('./db_connection');

//test shani
//test dudi 
//test yam
//test yonatan

const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Server static assets 
app.all('*', function(req, res, next) {
    if (!req.get('Origin')) return next();
    res.set('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,x-auth-token,x-api-key');
    next();
});

//Routs Middlewares
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);


//Listening on port 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(colors.red.underline.bgBrightWhite(`Server running on port ${port}`)));