const mongoose = require('mongoose');


const classSchema = new mongoose.Schema({
    // this is the name 
    name: { type: String, require: true},
    users: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
    
  }, {
    timestamps: true
  });
  

  module.exports = mongoose.model('Classroom', classSchema)