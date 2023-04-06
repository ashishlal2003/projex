const Project = require('../models/preWorkspaceModel');

// Middleware function to check if the user is logged in
const requireLogin = (req, res, next) => {
  console.log("req auth: "+req.isAuthenticated())
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

const projName = async (req,res) => {
  const user = req.session.user;
  console.log(user);
  const { projectName } = req.body;

  const createdBy = req.user._id;

  try {
    // Create a new project object with the required fields
    const newProject = new Project({
      name: projectName,
      createdBy: createdBy
    });

    // Save the new project to the database
    const savedProject = await newProject.save();

    // Redirect to the workspace for the newly created project
    res.redirect(`/workspace/${savedProject._id}`);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
    projName,
    requireLogin
};
