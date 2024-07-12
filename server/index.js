const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// midlewares
app.use(cors()); //Cross-origin resource sharing
app.use(express.json()); // access to req.body

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
