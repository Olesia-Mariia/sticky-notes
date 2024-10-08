import React, { useState } from 'react';
import {
  IoAdd,
  IoClose,
  IoCheckmark,
  IoList,
  IoTrash,
  IoEllipsisHorizontal,
} from 'react-icons/io5';

import colorArr from '../helpers/constant';
import { addNote, deleteNote, updateNote } from '../helpers/api';

import Btn from './Btn';

const NoteView = ({ note, setNotes, listview, setListview }) => {
  const [options, setOptions] = useState(false);

  const updateText = (text, id) => {
    updateNote({ text }, id);
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.note_id === note.note_id ? { ...n, text } : n))
    );
  };

  const updateColor = (bgcolor, id) => {
    updateNote({ bgcolor }, id);
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.note_id === note.note_id ? { ...n, bgcolor } : n))
    );
  };

  const updateView = (id) => {
    updateNote({ view: !note.view }, id);
    setNotes((prevNotes) =>
      prevNotes.map((n) =>
        n.note_id === note.note_id ? { ...n, view: !n.view } : n
      )
    );
  };

  return (
    <div className="item" data-swapy-item={`item-${note.note_id}`}>
      <div
        className="flex flex-col rounded overflow-hidden w-[330px] pb-1 mb-2 mr-2"
        style={{ backgroundColor: `${note.bgcolor}` }}
      >
        <div className="toolbar flex justify-between bg-black bg-opacity-10 items-center">
          <Btn click={() => addNote()} icon={<IoAdd size={20} />} />
          <div className="flex">
            <Btn
              click={() => setOptions(!options)}
              icon={<IoEllipsisHorizontal size={18} />}
            />
            <Btn
              click={() => updateView(note.note_id)}
              icon={<IoClose size={20} />}
            />
          </div>
        </div>
        {options && (
          <div className="toolarea flex flex-col bg-gray-100">
            <div className="colorarea w-full flex">
              {colorArr.map((color, cindex) => {
                return (
                  <span
                    key={`color-${cindex}`}
                    onClick={() => updateColor(color, note.note_id)}
                    className="flex flex-row w-full h-8 justify-center items-center cursor-pointer"
                    style={{ backgroundColor: `${color}` }}
                  >
                    {note.bgcolor === color ? <IoCheckmark size={20} /> : <></>}
                  </span>
                );
              })}
            </div>
            <button
              onClick={() => setListview(!listview)}
              className="flex justify-start items-center hover:bg-slate-200 py-1 px-2"
            >
              <IoList className="mr-2" /> Notes List
            </button>
            <button
              onClick={() => {
                deleteNote(note.note_id);
                setNotes((prevNotes) =>
                  prevNotes.filter((x) => x.note_id !== note.note_id)
                );
              }}
              className="flex justify-start items-center hover:bg-slate-200 py-1 px-2"
            >
              <IoTrash className="mr-2" /> Delete Note
            </button>
          </div>
        )}
        <textarea
          value={note.text}
          onChange={(e) => updateText(e.target.value, note.note_id)}
          placeholder="Take a note..."
          className="w-full bg-transparent focus-visible:outline-none p-2"
          name=""
          id=""
          cols="30"
          rows="2"
        ></textarea>
      </div>
    </div>
  );
};

export default NoteView;
