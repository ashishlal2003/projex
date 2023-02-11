const express = require('express');
const {
    getAuth
} = require('../controllers/controllers');

const router = express.Router();

//GET the Authentication page

router.get('/auth',getAuth);

module.exports = router;