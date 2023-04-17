const express = require('express');
const Project = require('../models/project');
const Task = require('../models/taskMan');
const{
    getWorkspace,
    deleteProject,
    createTask,
    updateTask
} = require('../controllers/workspaceControllers');

const {
    isAuth
  } = require('../controllers/authControllers');

const router = express.Router();

//GET the landing page

router.get('/workspace/:projectId',isAuth,getWorkspace);
router.get('/workspace/:projectId/:taskId',isAuth,getWorkspace);


router.post('/workspace/:projectId/delete', isAuth, deleteProject);

router.post('/workspace/:projectId/create-task',isAuth,createTask);

router.get('/workspace/:projectId/create-task',isAuth,async (req,res) => {
    const user = req.session.user;
    const projectId = req.params.projectId;
    const project = await Project.findById(projectId);
    const tasks = await Task.find({ projectId: projectId})
    res.render('create-task', { user, project, tasks });
});

router.post('/workspace/update-task/:projectId/:taskId/',isAuth,updateTask);

router.get('/workspace/update-task/:projectId/:taskId/',isAuth,async (req,res) => {
    const user = req.session.user;
    const projectId = req.params.projectId;
    const taskId = req.params.taskId;
    const project = await Project.findById(projectId);
    res.render('update-task', { user, project, taskId });
});
// router.get('/edit-profile', isAuth, editProfile)
module.exports = router;