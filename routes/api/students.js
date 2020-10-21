const express = require('express');
const router = express.Router();
const studentsCtrl = require('../../controllers/api/students');

/*----------All Routes are private----------*/
router.use(require('../../config/auth'));
router.post('/', studentsCtrl.createStudents);
router.get('/', studentsCtrl.indexStudents);
// router.get('/:id', studentsCtrl.create)





module.exports = router;