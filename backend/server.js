const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./authentication/routes/routes');

//Set up the express app
const app = express();

//Middleware
app.use(express.json());
app.use(express.static('public'));


app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
});

//Routes
app.use(authRoutes);

//Connecting to MongoDB

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log("connected to db & listening on port",process.env.PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })