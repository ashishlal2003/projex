const express = require('express');
const{
    getWorkspace,
    deleteProject,
    createTask,
    editProfile
} = require('../controllers/workspaceControllers');

const {
    isAuth
  } = require('../controllers/authControllers');

const router = express.Router();

//GET the landing page

router.get('/workspace/:projectId',isAuth,getWorkspace);

router.post('/workspace/:projectId/delete', isAuth, deleteProject);

router.post('/workspace/:projectId/create-task',isAuth,createTask);

router.post('/edit-profile',isAuth,editProfile);
// router.get('/edit-profile', isAuth, editProfile)
module.exports = router;