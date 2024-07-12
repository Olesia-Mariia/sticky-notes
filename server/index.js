const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// midlewares
app.use(cors()); //Cross-origin resource sharing
app.use(express.json()); // access to req.body

// ROUTES

// create a note
app.post("/notes", async (req, res) => {
  try {
    const { text, cdate, bgcolor, view } = req.body;
    const newNote = await pool.query(
      "INSERT INTO notes (text, cdate, bgcolor, view) VALUES($1, $2, $3, $4) RETURNING *",
      [text, cdate, bgcolor, view]
    );
    res.json(newNote.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all notes
app.get("/notes", async (req, res) => {
  try {
    const notes = await pool.query("SELECT * FROM notes");
    res.json(notes.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a single note
app.get("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const note = await pool.query(`SELECT * FROM notes WHERE note_id=${id}`);
    res.json(note.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a note
app.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { text, bgcolor, view } = req.body;
    const updates = [];
    if (text !== undefined) {
      updates.push(`text='${text}'`);
    }
    if (bgcolor !== undefined) {
      updates.push(`bgcolor='${bgcolor}'`);
    }
    if (view !== undefined) {
      updates.push(`view=${view}`);
    }
    const updatedNote = await pool.query(
      `UPDATE notes SET ${updates.join(", ")} WHERE note_id=${id}`
    );

    res.json("Note was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a note
app.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await pool.query(`DELETE FROM notes WHERE note_id=${id}`);
    res.json("Note was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
