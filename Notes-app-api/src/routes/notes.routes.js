const express = require('express');
const router = express.Router();

const {getAllNotes, getabcNotes} = require('../controllers/notes.controller')


router.get('/', getAllNotes)
router.get('/abc', getabcNotes)

module.exports = router;