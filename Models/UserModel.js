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
    departament:{
        type:String
    },
    role:{
        type:String,
        required: true
    },  
    Quests:[Reponses.schema],

    gender:{
        type:String,
        enum:['M','F']
    },
    age:{
        type:Number
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;