const express = require('express');
const router = express.Router();
const classroomsCtrl = require('../../controllers/api/classRooms');

/*---------- all Routes Protected Routes ----------*/

router.get('/', classroomsCtrl.indexClassrooms);
// router.get('/:id', classRoomsCtrl.editclassRooms)
router.post('/', classroomsCtrl.createClassrooms);





module.exports = router;