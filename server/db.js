require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: process.env.PG_PASSWORD,
  host: "localhost",
  port: 5432,
  database: "note_db",
});

module.exports = pool;
