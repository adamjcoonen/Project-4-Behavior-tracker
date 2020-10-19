const Classroom = require('../../models/classroom');




module.exports = {
    createClassrooms,
    indexClassrooms,
    show,
    delete: deleteOne,
    
}




 async function indexClassrooms(req, res) {
     req.body.user = req.user._id

    const classrooms = await Classroom.find({'users': {$in: req.body.user}});
    
   
    res.status(200).json(classrooms)
}


async function show(req, res){
    console.log(req.params)
}

async function createClassrooms(req, res){
    req.body.user = req.user._id
    let clR = {
        name: req.body.name,
    }
    const classroom = await Classroom.create(clR)
    classroom.users.push(req.body.user)
    classroom.save()
    res.status(201).json(classroom)
};

async function deleteOne(req, res) {
    const deletedEvent = await Event.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedEvent);
}
