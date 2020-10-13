const express = require('express');
const router = express.Router();
const classesCtrl = require('../../controllers/api/classes');

/*---------- Public Routes ----------*/

router.get('/', classesCtrl.index);
router.get('/:id', classesCtrl.edit)
router.post('/', classesCtrl.create);





module.exports = router;