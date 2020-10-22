const Classroom = require('../../models/classroom');




module.exports = {
    createClassrooms,
    indexClassrooms,
    // show,
    delete: deleteClassroom
    
}




 async function indexClassrooms(req, res) {
     
     req.body.user = req.user._id;

    const classrooms = await Classroom.find({'users': {$in: req.body.user}});

   
    res.status(201).json(classrooms)
}




async function createClassrooms(req, res){
    
    req.body.user = req.user._id;
    try {
    let clR = {
        name: req.body.name,
    }

    const classroom =  await Classroom.create(clR)
    classroom.users.push(req.body.user)
    classroom.save()
    res.status(200).json()
} catch(err) {
    console.log(err)
}
}

async function deleteClassroom(req, res) {
    console.log('the delete is called')
    const deletedClassroom = await Classroom.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedClassroom);


}