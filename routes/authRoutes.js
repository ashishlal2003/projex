const express = require('express');
const {
    getAuth,
    signUp,
    logIn
    // postAuth

} = require('../controllers/authControllers');

const router = express.Router();

//GET the Authentication page
router.get('/authentication',getAuth);

//POST signup from Auth
router.post('/authentication',signUp);

//POST login from Auth
router.post('/pre-workspace',logIn);

module.exports = router;