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
                

    }

    const student = await Student.create(std)
    student.save();
     const classR = Classroom.findById(`${req.body.classId}`) 
     classR.students.push(std._id)
        classR.save()
    
    
    
    console.log("let get that Id", student.params._id)
    
    res.status(201).json(student)
}