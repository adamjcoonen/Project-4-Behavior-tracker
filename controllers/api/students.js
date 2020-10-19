const Student = require('../../models/student');
const Classroom = require('../../models/classroom');






module.exports = {
    createStudents,
    indexStudents,
    
}


async function indexStudents(req, res) {
    console.log('firing index', req.headers)
    req.body.user = req.user._id

    const students = await Student.find({});
    
   
    res.status(200).json(students)
   
  }
  


async function createStudents(req, res ){
    
    let std = { name: req.body.name,
                dob: req.body.dob,
                iep_date: req.body.iepDt,
                beh_int_plan_dt: req.body.bIPDt,
                disability_code: req.body.disCode,
                

    }

    const student = await Student.create(std)
    student.save(function(err){;
    Classroom.findById(req.body.classId, function(err, classR){
        classR.students.push(student._id)
        classR.save()

    })
     

    
    } )
    
    
    res.status(201).json(student)
}

