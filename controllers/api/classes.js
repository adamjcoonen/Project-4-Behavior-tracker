const Class = require('../../models/class');




module.exports = {
    createClasses,
    indexClasses,
    
}



 async function indexClasses(req, res) {
     console.log('indexing classes')
     req.body.user = req.user._id
    const classes = await Class.find({user: req.user._id});
   
    res.status(200).json(classes)
}


async function createClasses(req, res){
    let clR = {
        name: req.body.name,
    }
    const classRoom = await Class.create(clR)
    classRoom.users.push(req.body.user)
    classRoom.save()
    res.status(201).json(classRoom)
};


