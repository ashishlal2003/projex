const model = require('../models/user');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');


const isAuth = (req,res,next)=>{
  if(req.session.isAuth){
    next();
  }
  else{
    res.redirect('/authentication');
  }
};

//GET the auth page
const getAuth = async (req,res) => {
    const message = req.query.msg;
      res.render('authentication', { message });
} 


//SignUp POST 
const signUp = async(req,res)=>{
    
    const saltRounds = 10;
    const {name,username,password} = req.body;

    const user = await model.findOne({username});

    if(user){
      return res.redirect('/authentication');
    }
  
    try{
      //Generating a random salt value
      const salt = await bcrypt.genSalt(saltRounds);

      //Hash the password along with the salt
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await model.create({name, username, password: hashedPassword});

      res.redirect('/authentication?msg=Please%20login%20with%20your%20new%20account');
    }
    catch(err){
      res.status(400).json({err:err.message});
    }
    // res.redirect('/');
    
};

//Login POST
const logIn = async(req,res)=>{
    const {username, password} = req.body;

    try{
      const user = await model.findOne({username});

      if(!user){
        return res.status(401).json({err: 'Invalid email'});
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if(passwordMatch){
        // res.render('pre-workspace',{ user })
        req.session.isAuth = true;
      // req.session.user = user;
      res.render('pre-workspace',{ user });
      }
  
      else{
        res.render('authentication');
      }
    }

    catch(err){
      console.log(err);
      res.status(500).json({err:err.message});
    }
    
};


module.exports = {
    getAuth,
    signUp,
    logIn,
    isAuth
};