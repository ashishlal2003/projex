const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  
  status: {
    type: String,
    default: "Task Ready"
  },

  createdAt: {
    type: Date,
    default: Date.now
    },

    createdBy: {    
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    deadline: {
        type: Date,
    },

    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'project'
    }
});


module.exports = mongoose.model('Task', taskSchema);
