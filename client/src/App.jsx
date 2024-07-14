import { useEffect, useState } from "react";
import "./App.css";

import { getNotes } from "./helpers/api";

import NotesListView from "./components/NotesListView";
import NoteView from "./components/NoteView";

function App() {
  const [notes, setNotes] = useState([]);
  const [listview, setListview] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newNotes = await getNotes();
        setNotes(newNotes);
      } catch (err) {
        console.error(err.mesage);
      }
    };
    fetchData();
  }, []);

  const updateNote = (val, i) => {
    let newNotes = [...notes];
    newNotes[i].text = val;
    setNotes(newNotes);
  };

  const updateColor = (val, i) => {
    let newNotes = [...notes];
    newNotes[i].bgcolor = val;
    setNotes(newNotes);
  };

  const updateView = (i) => {
    let newNotes = [...notes];
    newNotes[i].view = !newNotes[i].view;
    setNotes(newNotes);
  };

  const updateOpt = (i) => {
    let newNotes = [...notes];
    newNotes[i].options = !newNotes[i].options;
    setNotes(newNotes);
  };

  return (
    <div className="flex p-5 flex-row">
      <NotesListView
        notes={notes}
        listview={listview}
        setListview={setListview}
      />
      <div className="notesview w-full">
        {notes.length > 0 &&
          notes.map((note) => {
            if (note.view) {
              return (
                <NoteView
                  note={note}
                  key={`note-${note.note_id}`}
                  setNotes={setNotes}
                  listview={listview}
                  setListview={setListview}
                />
              );
            }
          })}
      </div>
    </div>
  );
}

export default App;
