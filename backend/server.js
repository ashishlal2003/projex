const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const landRoutes = require('./routes/landingRoutes');
const resetRoutes = require('./routes/resetRoutes');
const bodyParser = require('body-parser');

//Set up the express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// Set up EJS as the template engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('public'));



app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
});

//Routes
app.use(authRoutes);
app.use(landRoutes);
app.use(resetRoutes);

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