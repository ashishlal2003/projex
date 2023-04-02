const express = require('express');
const {
    projName
} = require('../controllers/preWorkspaceControllers');

const router = express.Router();

router.post('/projects',projName);

module.exports = router;