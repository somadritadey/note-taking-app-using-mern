const express = require('express')
const { createNote, deleteNote, getNotes, updateNote } = require('../controllers/note.controller')

const router = express.Router()

router.post("/create-note", createNote)
router.get("/get-notes", getNotes)
router.put("/update-note/:id", updateNote)
router.delete("/delete-note/:id", deleteNote)

module.exports = router
