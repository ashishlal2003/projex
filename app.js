require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);


const envKeys = require('./keys');
//Routes
const landingRoutes = require('./routes/landing');
const authRoutes = require('./routes/authentication');

//Models

const app = express();
app.set('view engine','ejs');
app.set('views','views');



app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use(express.json());
app.use(express.static('public'));

app.use(session({
    secret: envKeys.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));

app.use(landingRoutes);
app.use(authRoutes);




mongoose.connect(envKeys.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log("connected to db & listening on port",envKeys.PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
