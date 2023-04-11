const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        sparse: true
    },

    password: {
        type: String,
        required: true
    },

    // projects:[{
    //     productId: {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Product',
    //         required: true
    //     }
    // }]
    phone_number: {
        type: String
    },

    country: {
        type:String
    },

    role: {
        type: String
    },

    createdAt: {
        type: Date
    }
});

//Project addition methods pending

module.exports = mongoose.model('user', userSchema);
