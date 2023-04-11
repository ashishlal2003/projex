const express = require('express');
const preController = require('../controllers/pre-workspace');

const router = express.Router();

router.get('/pre-workspace', preController.getPre);

module.exports = router;