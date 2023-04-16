const express = require('express');
const{
    getWorkspace,
    deleteProject
} = require('../controllers/workspaceControllers');

const {
    isAuth
  } = require('../controllers/authControllers');

const router = express.Router();

//GET the landing page

router.get('/workspace/:projectId',isAuth,getWorkspace);

router.post('/workspace/:projectId/delete', isAuth, deleteProject);

module.exports = router;