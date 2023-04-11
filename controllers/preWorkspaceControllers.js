const Project = require('../models/preWorkspaceModel');
const model = require('../models/user')


const getPre = async(req,res,next)=>{
  res.render('pre-workspace');
}
module.exports = {
    getPre
};
