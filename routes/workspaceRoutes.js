const express = require('express');
const{
    getWorkspace
} = require('../controllers/workspaceControllers');

const {
    isAuth
  } = require('../controllers/authControllers');

const router = express.Router();

//GET the landing page

router.get('/workspace',isAuth,getWorkspace);

module.exports = router;