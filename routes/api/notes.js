const express = require('express');
const notesCtrl = require('../../controllers/api/notes');
const router = express.Router();

router.post('/', notesCtrl.createNote);
router.get('/:userId', notesCtrl.index);

module.exports = router;