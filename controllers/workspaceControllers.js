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

//GET the landing page
const getWorkspace = async (req,res) => {
    const user = req.session.user;
    res.render('workspace',{ user });
} 


module.exports = {
    getWorkspace
};