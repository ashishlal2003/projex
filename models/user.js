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

    organization:{
        type:String,
        default: "NULL"
    },

    state:{
        type: String,
        default: "NULL"
    },

    address:{
        type: String,
        default: "NULL"
    },

    phone_number: {
        type: String,
        default: "NULL"
    },

    country: {
        type:String,
        default: "NULL"
    },

    city:{
        type: String,
        default: "NULL"
    },

    role: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

//Project addition methods pending

module.exports = mongoose.model('user', userSchema);
