const express = require('express');
const{
    getWorkspace
} = require('../controllers/workspaceControllers');

const router = express.Router();

//GET the landing page

router.get('/workspace',getWorkspace);

module.exports = router;