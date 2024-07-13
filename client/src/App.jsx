import { useState } from "react";
import "./App.css";
import {
  IoAdd,
  IoSettingsOutline,
  IoClose,
  IoSearch,
  IoCheckmark,
  IoList,
  IoTrash,
  IoEllipsisHorizontal,
} from "react-icons/io5";

import NotesListView from "./components/NotesListView";
import NoteView from "./components/NoteView";

function App() {
  const [notes, setNotes] = useState([]);
  const [listview, setListview] = useState(true);
  const [filternotes, setFilternotes] = useState([]);

  // const addNote = (val) => {
  //   console.log(val)
  //   let newNotes = [...notes];
  //   val.createdon = new Date().toDateString();
  //   newNotes.push(val);
  //   setNotes(newNotes);
  // };

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

  const searchNote = (search) => {
    let newNotes = [...notes];
    let filterData = newNotes.filter((x) => x.text.includes(search));
    setFilternotes(filterData);
  };

  const deleteNote = (i) => {
    let newNotes = [...notes];
    newNotes.splice(i, 1);
    setNotes(newNotes);
  };

  return (
    <div className="flex p-5 flex-row">
      <NotesListView 
        listview={listview}
        setListview={setListview}
        searchNote={searchNote}
        notes={notes}
        filternotes={filternotes}
      />
      <div className="notesview w-full">
        {notes.length > 0 &&
          notes.map((x, i) => {
            if (x.view) {
              <NoteView />
            }
          })}
      </div>
    </div>
  );
}

export default App;
