const Project = require('../models/preWorkspaceModel');


const getPre = async(req,res,next)=>{
  res.render('pre-workspace');
}
module.exports = {
    getPre
};
