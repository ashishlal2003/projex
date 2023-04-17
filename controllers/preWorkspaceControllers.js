const Project = require('../models/project');
const session = require('express-session');
const bodyParser = require('body-parser');
const User = require('../models/user');

const getPre = async(req,res,next)=>{
  console.log("start"); 
  const user = req.session.user;
  const projects = await Project.find({ createdBy: user._id });
  // console.log(projects);
  res.render('pre-workspace',{ user,projects });
}

const postLogout = async(req,res,next)=>{
  req.session.destroy((err)=>{
    if(err) throw err;
    res.redirect('/');
  });
};

const createProj = async(req,res,next)=>{
  const projectName = req.body.projectName;
  const user = req.session.user;

  // Create a new project instance
  const project = new Project({
    name: req.body.projectName,
    description: req.body.projectDescription,
    createdBy: req.session.user._id
  });

  // Save the project to the database
  await project.save();

  // Retrieve all projects associated with the user
  const projects = await Project.find({ createdBy: user._id });

  // console.log(projects);

  // Render the pre-workspace page with the user and projects data
  res.redirect('/pre-workspace');
  res.render('pre-workspace', { user, projects });
};

const editProfile = async (req,res) => {
  const user = req.session.user;
  const name = req.body.name;
  const organisation = req.body.organisation;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;

  await User.updateOne({ _id: user._id }, {
    name,
    organisation,
    address,
    city,
    state,
    country
  });

  // After updating the user's details in the database, redirect the user to the pre-workspace page
  res.redirect('/pre-workspace');
};



  

module.exports = {
    getPre,
    postLogout,
    createProj,
    editProfile
};