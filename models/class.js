const mongoose = require('mongoose');


const classSchema = new mongoose.Schema({
    name: { type: String, require: true},
    user: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"

    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
    
  }, {
    timestamps: true
  });
  

  module.exports = mongoose.model('Class', classSchema)