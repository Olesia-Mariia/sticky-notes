import React, { useState } from "react";
import { IoAdd, IoSettingsOutline, IoClose, IoSearch } from "react-icons/io5";

import { addNote } from "../helpers/api";

import Btn from "./Btn";
import NotePreview from "./NotePreview";

const NotesListView = ({ notes, listview, setListview, setNotes }) => {
  const [search, setSearch] = useState("");
  const [filternotes, setFilternotes] = useState([]);

  const searchNote = (search) => {
    let newNotes = [...notes];
    let filterData = newNotes.filter((x) => x.text.includes(search));
    setFilternotes(filterData);
  };

  return (
    <div
      className={`noteslist ${
        listview
          ? "scale-100 w-[280px] max-h-[570px] mr-2 bg-[#f1f1f1] border"
          : "scale-0 w-0 h-0"
      }  flex-shrink-0 rounded overflow-hidden transition-all linear duration-700`}
    >
      <div className="toolbar flex justify-between bg-black bg-opacity-10 items-center">
        <Btn click={() => addNote()} icon={<IoAdd size={20} />} />
        <div className="flex">
          {/* <Btn click={() => addNote()} icon={<IoSettingsOutline size={18} />} /> */}
          <Btn
            click={() => setListview(!listview)}
            icon={<IoClose size={20} />}
          />
        </div>
      </div>
      <h1 className="text-2xl p-2">Sticky Notes</h1>
      <div className="flex m-2 bg-slate-300 justify-center items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Searh..."
          className="bg-transparent w-full p-2 focus-visible:outline-none"
        />
        <Btn click={() => searchNote(search)} icon={<IoSearch size={20} />} />
      </div>
      <div className="max-h-[420px] overflow-auto">
        {search == "" &&
          notes.length > 0 &&
          notes.map((note) => {
            return <NotePreview note={note} key={`preview-${note.note_id}`} setNotes={setNotes} />;
          })}
        {search != "" &&
          filternotes.length > 0 &&
          filternotes.map((note) => {
            return <NotePreview note={note} key={`preview-${note.note_id}`} setNotes={setNotes} />;
          })}
      </div>
    </div>
  );
};

export default NotesListView;
