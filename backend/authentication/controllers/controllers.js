const model = require('../model/model');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//GET the auth page
const getAuth = async (req,res) => {
    res.render('authentication');
} 

// const postAuth = async(req,res)=> {
//     res.status(200).json({auth:true});
// }

const signUp = async(req,res)=>{
    
    const {name,username,password} = req.body;
  
    try{
      const user = await model.create({name, username, password});
    }
    catch(err){
      res.status(400).json({err:err.message});
    }
      res.redirect('/');
    
}

module.exports = {
    getAuth,
    signUp
};