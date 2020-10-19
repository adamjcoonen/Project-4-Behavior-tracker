const express = require('express');
const router = express.Router();
const classroomsCtrl = require('../../controllers/api/classrooms');

/*---------- all Routes Protected Routes ----------*/
router.use(require('../../config/auth'));
router.get('/', classroomsCtrl.indexClassrooms);
// router.get('/:id', classroomsCtrl.editclassrooms)
router.post('/', classroomsCtrl.createClassrooms);
router.get('/', classroomsCtrl.show)
router.delete('/:id', classroomsCtrl.delete)






module.exports = router;