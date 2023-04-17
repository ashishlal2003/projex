const session = require('express-session');
const Project = require('../models/project');
const bodyParser = require('body-parser');
const Task  = require('../models/taskMan');
const User = require('../models/user');

//GET the page
const getWorkspace = async (req,res) => {
    const user = req.session.user;
    const projectId = req.params.projectId;
    // const tasks = await Task.find({ createdBy: user._id });
  
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).send('Project not found');
      }
      const tasks = await Task.find({ projectId: projectId})
      res.render('workspace', { user, project, tasks });

    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
} 

// Add this to the workspaceController.js file
const deleteProject = async (req, res) => {
    const user = req.session.user;
    const projectId = req.params.projectId;
    const projectName = req.body.projectName;
  
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).send('Project not found');
      }
  
      // Check if the project name matches
      if (project.name !== projectName) {
        // console.log(project.name);
        // console.log(projectName);
        return res.status(400).send('Project name does not match');
      }
  
      // Delete the project
      await project.delete();
  
      res.redirect('/pre-workspace');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };

 
 const createTask = async (req, res) => {
    const user = req.session.user;
    const projectId = req.params.projectId;
    const projectName = req.body.projectName;
    const taskName = req.body.taskName;
    const taskDeadline = req.body.taskDeadline;
    // console.log("99");
    const task = new Task({
        name: req.body.taskName,
        createdBy: req.session.user._id,
        deadline: req.body.taskDeadline,
        projectId: req.params.projectId
    });
// console.log("100");
// console.log(task);
    await task.save();

    const tasks = await Task.find({ projectId: projectId})
    const project = await Project.findById(projectId);
    // console.log(project);
    // console.log(tasks);
    // res.redirect('/workspace');
    res.render('workspace', { user, tasks, project });
}; 

  

module.exports = {
    getWorkspace,
    deleteProject,
    createTask
};