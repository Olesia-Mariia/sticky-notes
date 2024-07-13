import React from 'react'
import {
  IoAdd,
  IoClose,
  IoCheckmark,
  IoList,
  IoTrash,
  IoEllipsisHorizontal,
} from "react-icons/io5";

import colorArr from "../helpers/constant"

import Btn from './Btn';
import { addNote } from '../helpers/api';

const NoteView = ({note}) => {
  return (
    <div
      className="flex flex-col rounded overflow-hidden w-[400px] pb-1 mb-2"
      style={{ backgroundColor: `${note.bgcolor}` }}
    >
      <div className="toolbar flex justify-between bg-black bg-opacity-10 items-center">
        <Btn
          click={() => addNote()}
          icon={<IoAdd size={20} />}
        />
        <div className="flex">
          <Btn
            click={() => updateOpt(i)}
            icon={<IoEllipsisHorizontal size={18} />}
          />
          <Btn
            click={() => updateView(i)}
            icon={<IoClose size={20} />}
          />
        </div>
      </div>
      {note.options && (
        <div className="toolarea flex flex-col bg-gray-100">
          <div className="colorarea w-full flex">
            {colorArr.map((color, cindex) => {
              return (
                <span
                  onClick={() => updateColor(color, note.note_id)}
                  className="flex flex-row w-full h-8 justify-center items-center cursor-pointer"
                  style={{ backgroundColor: `${color}` }}
                >
                  {note.bgcolor === color ? (
                    <IoCheckmark size={20} />
                  ) : (
                    <></>
                  )}
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
            onClick={() => deleteNote(i)}
            className="flex justify-start items-center hover:bg-slate-200 py-1 px-2"
          >
            <IoTrash className="mr-2" /> Delete Note
          </button>
        </div>
      )}
      <textarea
        value={note.text}
        onChange={(e) => updateNote(e.target.value, i)}
        placeholder="Take a note..."
        className="w-full bg-transparent focus-visible:outline-none p-2"
        name=""
        id=""
        cols="30"
        rows="2"
      ></textarea>
    </div>
  )
}

export default NoteView