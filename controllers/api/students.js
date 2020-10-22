const Student = require('../../models/student');
const Classroom = require('../../models/classroom');






module.exports = {
    createStudents,
    indexStudents,
    
}


async function indexStudents(req, res) {
    
    req.body.user = req.user._id

    const students = await Student.find({});
    
   
    res.status(200).json(students)
   
  }
  


async function createStudents(req, res ){
    console.log(req.body, 'this is the student req.body')
    req.body.user = req.user._id
    let std = { name: req.body.name,
                dob: req.body.dob,
                iep_date: req.body.iepDt,
                beh_int_plan_dt: req.body.bIPDt,
                disability_code: req.body.disCode,
                

    }

    const student = await Student.create(std)
    student.save(function(err){
        console.log(student._id)
    Classroom.findById( req.body.classId, function(err, classR){
        classR.students.push(student._id)
        classR.save()
        console.log(classR, "new class data")

    })
     

    
    } )
    
    
    res.status(201).json(student)
}

