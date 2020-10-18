const Student = require('../../models/student');
const Classroom = require('../../models/classroom');




module.exports = {
    createStudents,
    // indexStudents,
    
}


async function createStudents(req, res ){
    
    let std = { name: req.body.name,
                dob: req.body.dob,
                iep_date: req.body.iepDt,
                beh_int_plan_dt: req.body.bIPDt,
                disability_code: req.body.disCode,
                // id: req.body.classroom     

    }
    console.log(req.params)
    const student = await Student.create(std)
    Classroom.students.push()
    student.save()
    
    res.status(201).json(student)
}