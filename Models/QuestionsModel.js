const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({  
  
  questionsTemplate: [{

  description: {
    type: String,
  },
  type:{
    type: String,
    enum:['O','C'],//O for open and C for closed 
    
  },visible:{
    type:Boolean,
    default:true
  },
  openText:{
    type:String
  },
  category:{
    id:Number,
    name:String
  },
  options:[{
    name:String,
    id:Number
  }]
}]


})

const Quests = mongoose.model('Quest', questSchema);

module.exports = Quests;