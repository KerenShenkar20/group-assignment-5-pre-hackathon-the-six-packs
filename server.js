const express = require('express');
const {UserRouter} = require('./routes/users');
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

app.use('/users', UserRouter);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
   });
//Listening on port 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log((`Server running on port ${port}`)));