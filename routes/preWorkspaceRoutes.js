const express = require('express');
const {
    getPre, postLogout, createProj
} = require('../controllers/preWorkspaceControllers');

const {
  isAuth
} = require('../controllers/authControllers');

const router = express.Router();

// router.post('/projects',projName);

router.get('/pre-workspace',isAuth, getPre);
// router.post('/pre-workspace',isAuth, getPre)

router.post('/logout',postLogout)

router.post('/create-project',isAuth, createProj);

module.exports = router;