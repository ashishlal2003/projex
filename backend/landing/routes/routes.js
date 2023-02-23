const express = require('express');
const { route } = require('../../authentication/routes/routes');
const{
    getLanding
} = require('../controllers/controllers');

const router = express.Router();

//GET the landing page

router.get('/',getLanding);

module.exports = router;

