const express = require('express');
const {
    getPre
} = require('../controllers/preWorkspaceControllers');

const {
  isAuth
} = require('../controllers/authControllers');

const router = express.Router();

// router.post('/projects',projName);

router.get('/pre-workspace',isAuth, getPre);

module.exports = router;