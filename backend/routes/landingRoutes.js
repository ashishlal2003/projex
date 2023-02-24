const express = require('express');
const { route } = require('../routes/authRoutes');
const{
    getLanding
} = require('../controllers/landingControllers');

const router = express.Router();

//GET the landing page

router.get('/',getLanding);

module.exports = router;

