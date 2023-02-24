//GET the landing page
const getLanding = async (req,res) => {
    res.render('landing');
} 

module.exports = {
    getLanding
};