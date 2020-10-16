const express = require('express');
const router = express.Router();
const classroomsCtrl = require('../../controllers/api/classrooms');

/*---------- all Routes Protected Routes ----------*/

router.get('/', classroomsCtrl.indexClassrooms);
// router.get('/:id', classroomsCtrl.editclassrooms)
router.post('/', classroomsCtrl.createClassrooms);





module.exports = router;