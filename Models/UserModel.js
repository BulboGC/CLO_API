const mongoose = require('mongoose');
const Reponses = require('./ResponseModel');




const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role:{
        type:String,
        required: true
    },  
    Quests:[Reponses.schema]

});

const User = mongoose.model('User', userSchema);

module.exports = User;