const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name:{
        type:String,
        required: true
    },

    description:{
        type: String
    },
    startDate:{
        type: Date,
        default: Date.now
    },
    endDate:{
        type: Date
    },
    status:{
        type:String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

projectSchema.methods.delete = async function(){
    await this.model('Project').deleteOne({_id:this._id});
}

module.exports = mongoose.model('Project', projectSchema);