const session = require('express-session');

const isAuth = (req,res,next) =>{
    if(req.session.isAuth){
        next();
    }
    else{
        res.redirect('authentication');
    }
};

module.exports.getPre = (isAuth,(req,res,next)=>{
    res.render('pre-workspace');
})