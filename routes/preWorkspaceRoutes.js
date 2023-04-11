const express = require('express');
const {
    getPre, postLogout
} = require('../controllers/preWorkspaceControllers');

const {
  isAuth
} = require('../controllers/authControllers');

const router = express.Router();

// router.post('/projects',projName);

router.get('/pre-workspace',isAuth, getPre);

router.post('/logout',postLogout)

module.exports = router;