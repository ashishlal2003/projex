const express = require('express');
const {
    getReset
} = require('../controllers/resetControllers');

const router = express.Router();

//GET the Reset Password page
router.get('/reset-password',getReset);

module.exports = router;