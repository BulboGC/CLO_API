const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema([
  {
    responseC: {
      type: Number
    },
    responseO: {
      type: String
    },

    quest_id:{
      type: String,
      ref: 'Quest'
    }
  }
]

);

const Response = mongoose.model('Responses', responseSchema);

module.exports = Response;