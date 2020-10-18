const mongoose = require('mongoose');


const incidentSchema = new mongoose.Schema({
  behavior: { type: String, required: true},
  antecedent: { type: String, required: true},
  consequense: { type: String, required: true},
  notes: { type: String, required: false}
}, {
  timestamps: true,
})


const studentSchema = new mongoose.Schema({
    name: { type: String, require: true},
    dob: { type: Date, require: true},
    iep_date: { type: Date, require: true},
    beh_int_plan_dt: { type: Date, require: true},
    disability_code: { type: String, require: true},
    incident: [incidentSchema]
    
  }, {
    timestamps: true
  });



  

  module.exports = mongoose.model('Student', studentSchema)