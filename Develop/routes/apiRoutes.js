const router = require("express").Router();
const { notes } = require("../db/db.json");
const fs = require("fs");

// Get all notes
router.get("/notes", (req, res) => {
    res.json(data);
});

// Get notes by id
router.get("/notes/:id", (req, res) => {
    res.json(data[Number(req.params.id)]);
});

// Post notes
router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    fs.writeFile("../db/db.json", JSON.stringify(note))
    res.json(notes);
});

module.exports = router;