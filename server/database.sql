CREATE DATABASE note_db;

CREATE TABLE notes(
  note_id SERIAL PRIMARY KEY,
  text TEXT,
  cdate DATE,
  bgcolor VARCHAR(7),
  view BOOL
);
