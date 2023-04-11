const cookies = require('../util/cookie');
const User = require('../models/user');

module.exports.getAuth = (req,res,next)=>{
    res.render('authentication');
};