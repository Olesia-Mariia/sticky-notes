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

//

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
