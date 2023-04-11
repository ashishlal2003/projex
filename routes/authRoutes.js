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
router.post('/pre-workspace',signUp);

//POST login from Auth
router.post('/login',logIn);

router.get('/pre-workspace', async (req, res) => {
    try {
      const user = req.session.user;
      res.render('pre-workspace', { user });
    } catch (error) {
      console.error(error);
    //   res.render('error');
    }
  });
  
  

module.exports = router;