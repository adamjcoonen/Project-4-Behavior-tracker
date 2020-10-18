const Student = require('../../models/student');
const Classroom = require('../../models/classroom')



module.exports = {
    createStudents,
    // indexStudents,
    
}


async function createStudents(req, res ){
    
    let std = req.body._id
    const student = await Student.create()
    console.log(std, 'give me student data ')
    Classroom.students.push(std)
    student.save()
    
    res.status(201).json(student)
}