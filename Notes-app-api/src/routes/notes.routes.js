const express = require('express');
const router = express.Router();

const {getAllNotes, createNote,getNoteById,updateNote,Deletenotes} = require('../controllers/notes.controller')


router.get('/', getAllNotes);

router.post('/',createNote);

router.get('/:id', getNoteById);

router.put('/:id', updateNote);

router.delete('/:id', Deletenotes)

module.exports = router;