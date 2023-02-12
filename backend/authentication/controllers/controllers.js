const model = require('../model/model');
const mongoose = require('mongoose');

//GET the auth page
const getAuth = async (req,res) => {
    res.render('authentication');
} 

// const postAuth = async(req,res)=> {
//     res.status(200).json({auth:true});
// }

const signUp = async(req,res)=>{
    const db = client.db("test");
    const collection = db.collection("model");
    const { name, username, password } = req.body;
  
    collection.insertOne({ name, username, password }, (err, result) => {
      if (err) {
        return res.send({ error: 'Failed to sign up' });
      }
  
      res.send({ message: 'Signed up successfully' });
    });
}

module.exports = {
    getAuth,
    signUp
};