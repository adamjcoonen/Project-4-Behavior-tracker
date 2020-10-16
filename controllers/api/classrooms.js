const Classroom = require('../../models/classroom');




module.exports = {
    createClassrooms,
    indexClassrooms,
    
}



 async function indexClassrooms(req, res) {
     
     req.body.user = req.user._id

    const classrooms = await Classroom.find({'users': {$in: [req.body.user]}});
    
   
    res.status(200).json(classrooms)
    console.log('indexing Classrooms', classrooms )
}


async function createClassrooms(req, res){
    let clR = {
        name: req.body.name,
    }
    const classroom = await Classroom.create(clR)
    classroom.users.push(req.body.user)
    classroom.save()
    res.status(201).json(classroom)
};


