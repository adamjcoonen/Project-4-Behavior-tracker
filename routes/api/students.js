const express = require('express');
const router = express.Router();
const studentsCtrl = require('../../controllers/api/students');

/*---------- Public Routes ----------*/
router.post('/', studentsCtrl.createStudents);
router.get('/', studentsCtrl.indexStudents);
// router.get('/:id', studentsCtrl.create)





module.exports = router;