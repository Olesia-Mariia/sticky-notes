import React from "react";

const NotePreview = () => {
  return (
    <div className="m-2 relative cursor-pointer" onClick={() => updateView(i)}>
      <div
        className={`noteview ${
          x.view ? "active" : ""
        } flex flex-col w-full p-2`}
        style={{ backgroundColor: `${x.bgcolor}` }}
      >
        <div className="flex justify-end">
          <span className="text-xs">{x.createdon}</span>
        </div>
        <textarea
          value={x.text}
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
