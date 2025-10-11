const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// @route   GET /notes
// @desc    Get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find().sort({ date: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /notes
// @desc    Create a new note
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ title, content });
  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   PUT /notes/:id
// @desc    Update a note
router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   DELETE /notes/:id
// @desc    Delete a note
router.delete("/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
