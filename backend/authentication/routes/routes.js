const express = require('express');
const {
    getAuth,
    signUp,
    logIn
    // postAuth

} = require('../controllers/controllers');

const router = express.Router();

//GET the Authentication page
router.get('/authentication',getAuth);

//POST signup from Auth
router.post('/signup',signUp);

//POST login from Auth
router.post('/login',logIn);
  

module.exports = router;