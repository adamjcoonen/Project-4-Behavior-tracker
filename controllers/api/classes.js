const Class = require('../../models/class');



module.exports = {
    createClass,
    indexClasses,
}



 async function indexClasses(req, res) {
    const classes = await Class.find({});
    res.status(200).json(classes)
}


function createClass(req, res){
    console.log( req.params)
};


