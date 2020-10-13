import Class from '../../models/class';



module.exports = {
    createClass,
    indexClasses,
}



 async function indexClasses(req, res) {
    const classes = await Class.find({});
    res.status(200).json(classes)
}


function createClass(class){
    const class = await Class
    
};


