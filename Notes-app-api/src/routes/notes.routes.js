const express = require('express');
const router = express.Router();

const {getAllNotes, createNote,getNoteById} = require('../controllers/notes.controller')


router.get('/', getAllNotes);

router.post('/',createNote);

router.get('/:id', getNoteById);

module.exports = router;