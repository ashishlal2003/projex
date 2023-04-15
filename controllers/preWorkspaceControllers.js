const Project = require('../models/preWorkspaceModel');
const session = require('express-session');



const getPre = async(req,res,next)=>{
  res.render('pre-workspace');
}

const postLogout = async(req,res,next)=>{
  req.session.destroy((err)=>{
    if(err) throw err;
    res.redirect('/');
  })
};
module.exports = {
    getPre,
    postLogout
};
