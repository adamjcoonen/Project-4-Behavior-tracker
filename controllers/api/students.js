const Student = require('../../models/student');
const Classroom = require('../../models/classroom');





module.exports = {
    createStudents,
    indexStudents,
    
}



async function indexStudents(req, res) {
     
    req.body._id = req.user

   const students = await Student.find({'students': {$in: classR[students]}});
   
  
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
    
    console.log("let get that Id",  student._id)
    
    res.status(201).json(student)
}