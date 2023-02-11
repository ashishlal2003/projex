const model = require('../model/model');
const mongoose = require('mongoose');

//GET the auth page
const getAuth = async (req,res) => {
    res.sendFile('/WorkArea/authentication.html',{root: '../'});
}

module.exports = {
    getAuth
};