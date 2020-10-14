const express = require('express');
const router = express.Router();
const classesCtrl = require('../../controllers/api/classes');

/*---------- all Routes Protected Routes ----------*/

// router.get('/', classesCtrl.indexClasses);
// router.get('/:id', classesCtrl.editClasses)
router.post('/', classesCtrl.createClasses);





module.exports = router;