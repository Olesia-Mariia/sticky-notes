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

  return (
    <div className="flex p-5 flex-row">
      <NotesListView
        notes={notes}
        listview={listview}
        setListview={setListview}
        setNotes={setNotes}
      />
      <div className="notesview w-full flex flex-wrap content-start items-start">
        {notes.length > 0 &&
          notes.map((note) => {
            if (note.view) {
              return (
                <NoteView
                  key={`note-${note.note_id}`}
                  note={note}
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
