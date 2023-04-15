// const http = require('http');
// const url = require('url');
// const querystring = require('querystring');

// const server = http.createServer((req, res) => {
//   // Get the URL parameters from the request object
//   const { query } = url.parse(req.url);
//   const params = querystring.parse(query);

//   // Get the project name from the 'project' parameter
//   const projectName = params.project;

//   // Render the workspace.ejs template with the project name variable
//   res.render('workspace', { projectName: projectName });
// });

const session = require('express-session');
const Project = require('../models/project');

//GET the page
const getWorkspace = async (req,res) => {
    const user = req.session.user;
    const projectId = req.params.projectId;
  
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).send('Project not found');
      }
  
      res.render('workspace', { user, project });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
} 


module.exports = {
    getWorkspace
};