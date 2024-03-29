require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const landRoutes = require('./routes/landingRoutes');
const preWorkspaceRoutes = require('./routes/preWorkspaceRoutes');
const workspaceRoutes = require('./routes/workspaceRoutes');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);

//Set up the express app
const app = express();

const store = new MongoDBSession({
    uri: process.env.MONGO_URI,
    collection: "mySessions"
})

// Set up session middleware
app.use(session({
    secret: process.env.your_secret,
    resave: false,
    saveUninitialized: false,
    store: store
  }))
  

app.use(bodyParser.urlencoded({ extended: true }));
// Set up EJS as the template engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.json());
app.use(express.static('public'));

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
res.setHeader('Pragma', 'no-cache');
res.setHeader('Expires', 0);

    next();
});

//Routes
app.use(authRoutes);
app.use(landRoutes);
app.use(preWorkspaceRoutes);  
app.use(workspaceRoutes);

//Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log("connected to db & listening on port",process.env.PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })