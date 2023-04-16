const Project = require('../models/project');
const session = require('express-session');
const bodyParser = require('body-parser');

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
module.exports = {
    getPre,
    postLogout,
    createProj
};