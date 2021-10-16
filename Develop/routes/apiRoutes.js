const router = require("express").Router();
const { notes } = require("../db/db.json");
const fs = require("fs");
const path = require("path");

// Get all notes
router.get("/notes", (req, res) => {
    res.json(notes);
});

// Get notes by id
router.get("/notes/:id", (req, res) => {
    res.json(data[Number(req.params.id)]);
});

// Post notes
router.post("/notes", (req, res) => {
    // req.body.id = notes.length.toString();
    const newNote = req.body;
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),JSON.stringify({ newNote }));
    console.log(newNote);
    res.json(newNote);
});

module.exports = router;