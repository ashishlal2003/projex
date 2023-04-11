const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projName:{
        type:String,
        required: true
    },

    projDesc:{
        type: String
    },
    startDate:{
        type: Date
    },
    endDate:{
        type: Date
    },
    status:{
        type:String
    },
    createdBy:{
        type:String,
        required:true,
        ref: 'user'
    }
});

module.exports = mongoose.model('Project', projectSchema);