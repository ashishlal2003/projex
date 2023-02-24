const model = require('../models/authModel');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//GET the reset page
const getReset = async (req,res) => {
    res.render('resetPass');
} 

module.exports = {
    getReset
};