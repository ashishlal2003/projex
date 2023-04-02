const Project = require('../models/preWorkspaceModel');

const projName = async (req,res) => {
  const projectName = req.body.projectName;
  const username = req.session.username;

  const project = new Project({
    name: projectName,
    createdBy: username
  });

  project.save()
    .then(() => {
      res.render('/pre-workspace');
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Error creating project');
    });
};

module.exports = {
    projName
};
