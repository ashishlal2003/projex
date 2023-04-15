const express = require('express');
const{
    getWorkspace
} = require('../controllers/workspaceControllers');

const {
    isAuth
  } = require('../controllers/authControllers');

const router = express.Router();

//GET the landing page

router.get('/workspace/:projectId',isAuth,getWorkspace);

module.exports = router;