const express = require('express');
const {
    projName,
    requireLogin
} = require('../controllers/preWorkspaceControllers');

const router = express.Router();

router.post('/projects',projName);

// Route for the create project form
router.get('/create-project', requireLogin, (req, res) => {
    res.render('pre-workspace', { user: req.user });
  });

module.exports = router;