import React from "react";

const NotePreview = ({note}) => {
  return (
    <div  className="m-2 relative cursor-pointer" onClick={() => updateView(i)}>
      <div
        className={`noteview ${
          note.view ? "active" : ""
        } flex flex-col w-full p-2`}
        style={{ backgroundColor: `${note.bgcolor}` }}
      >
        <div className="flex justify-end">
          <span className="text-xs">{ new Date(note.cdate).toDateString()}</span>
        </div>
        <textarea
          value={note.text}
          readOnly
          placeholder="Take a note..."
          className="w-full cursor-pointer bg-transparent resize-none focus-visible:outline-none"
          name=""
          id=""
          cols="30"
          rows="2"
        ></textarea>
      </div>
    </div>
  );
};

export default NotePreview;
