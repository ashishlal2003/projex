const express = require('express');
const authController = require('../controllers/authentication');

const router = express.Router();

router.get('/authentication', authController.getAuth);

module.exports = router;