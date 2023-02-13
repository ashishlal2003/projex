const express = require('express');
const {
    getAuth,
    signUp
    // postAuth

} = require('../controllers/controllers');

const router = express.Router();

//GET the Authentication page
router.get('/authentication',getAuth);

// //POST the Authentication page
// router.post('/authentication',postAuth);

//POST signup
router.post('/authentication',signUp);
  

module.exports = router;