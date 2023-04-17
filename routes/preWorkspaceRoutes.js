const express = require('express');
const Project = require('../models/project');
const {
    getPre, postLogout, createProj, editProfile
} = require('../controllers/preWorkspaceControllers');

const {
  isAuth
} = require('../controllers/authControllers');

const router = express.Router();



// router.post('/projects',projName);

router.get('/pre-workspace',isAuth,getPre);

router.get('/pre-workspace', isAuth, async (req, res) => {
  const user = req.session.user;
  const projects = await Project.find({ createdBy: user._id });

  res.render('pre-workspace', { user, projects });
});

// router.post('/pre-workspace',isAuth, getPre)

router.post('/logout',postLogout)

router.post('/create-project',isAuth, createProj);

router.post('/edit-profile', isAuth, editProfile);
router.get('/edit-profile', isAuth, async (req, res) => {
  const user = req.session.user;
  const projects = await Project.find({ createdBy: user._id });
  res.render('edit-profile', { user,projects });
});

module.exports = router;