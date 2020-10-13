const mongoose = require('mongoose');


const classSchema = new mongoose.Schema({
    name: { type: String, require: True},
    
  }, {
    timestamps: true
  });
  

  module.exports = mongoose.model('Class', classSchema)