const Class = require('../../models/class');



module.exports = {
    createClasses,
    indexClasses,
    
}



 async function indexClasses(req, res) {
    const classes = await Class.find({});a
    res.status(200).json(classes)
}


async function createClasses(req, res){
    const classRoom = await Class.create(req.body, req.params._id)
    res.status(201).json(classRoom)
};


