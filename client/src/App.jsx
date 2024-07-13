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
      {/* <div className="notesview w-full">
        {notes.length > 0 &&
          notes.map((x, i) => {
            if (x.view) {
              return (
                <div
                  key={i}
                  className="flex flex-col rounded overflow-hidden w-[400px] pb-1 mb-2"
                  style={{ backgroundColor: `${x.bgcolor}` }}
                >
                  <div className="toolbar flex justify-between bg-black bg-opacity-10 items-center">
                    <Btn
                      click={() => addNote(blankNote)}
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
                  {x.options && (
                    <div className="toolarea flex flex-col bg-gray-100">
                      <div className="colorarea w-full flex">
                        {colorArr.map((color, cindex) => {
                          return (
                            <span
                              onClick={() => updateColor(color, i)}
                              className="flex flex-row w-full h-8 justify-center items-center cursor-pointer"
                              style={{ backgroundColor: `${color}` }}
                            >
                              {x.bgcolor === color ? (
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
                    value={x.text}
                    onChange={(e) => updateNote(e.target.value, i)}
                    placeholder="Take a note..."
                    className="w-full bg-transparent focus-visible:outline-none p-2"
                    name=""
                    id=""
                    cols="30"
                    rows="2"
                  ></textarea>
                </div>
              );
            }
          })}
      </div> */}
    </div>
  );
}

export default App;
