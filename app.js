const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

const routes = require('./routes');
require('express-async-errors');

//middleware to parse request
app.use((req,res,next) => {
    console.log(`method : ${req.method} ; url : ${req.url}`);
    next(); 
});



//middleware for errors
app.use((err,req,res,next) => {
    console.error(err);
    res.status(err.status || 500).send('Something went wrong!');
})

app.use('/test',routes);

db.query("SELECT 1")
    .then(() => {
        console.log('db connection succeeded')
        app.listen(3000, () => console.log('server started at port 3000'))
})
    .catch(err => console.log('db connection failed. \n' + err))