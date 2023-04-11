const express = require('express');
const landingController = require('../controllers/landing');

const router = express.Router();

router.get('/', landingController.getLanding);

module.exports = router;