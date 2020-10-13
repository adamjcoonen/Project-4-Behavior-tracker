const mongoose = require('mongoose');


const classSchema = new mongoose.Schema({
    name: { type: String, require: True},
    user: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "class"

    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
    
  }, {
    timestamps: true
  });
  

  module.exports = mongoose.model('Class', classSchema)