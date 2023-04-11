const session = require('express-session');

module.exports.getLanding = (req,res,next) =>{
    req.session.isAuth = true;
    res.render('landing');
}