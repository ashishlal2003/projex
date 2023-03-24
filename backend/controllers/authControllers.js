const model = require('../models/authModel');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


//GET the auth page
const getAuth = async (req,res) => {
    res.render('authentication');
} 


//SignUp POST 
const signUp = async(req,res)=>{
    
    const saltRounds = 10;
    const {name,username,password} = req.body;
  
    try{
      //Generating a random salt value
      const salt = await bcrypt.genSalt(saltRounds);

      //Hash the password along with the salt
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await model.create({name, username, password: hashedPassword});

      res.render('pre-workspace');
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
        const banda = await model.findOne({_id:req.banda._id}).exec();
        res.render('pre-workspace',{user:banda});
        res.render('pre-workspace');
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
    logIn
};