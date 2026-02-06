const express = require('express');
const router = express.Router();

const {getAllNotes} = require('../controllers/notes.controller')


router.get('/', getAllNotes)

module.exports = router;