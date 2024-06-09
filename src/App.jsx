import { useState } from "react";
import "./App.css";
import { IoAdd, IoSettingsOutline, IoClose, IoSearch } from "react-icons/io5";
import Btn from "./components/Btn";

function App() {
  const blankNote = {
    text: "",
    createdon: null,
    bgcolor: "#feff9c",
    view: true,
  };
  const [notes, setNotes] = useState([]);

  const addNote = (val) => {
    let newNotes = [...notes];
    val.createdon = new Date().toDateString();
    newNotes.push(val);
    setNotes(newNotes);
  };

  return (
    <div className="flex p-5 flex-row">
      <div className="noteslist border w-[280px] flex-shrink-0 h-full mr-2 bg-[#f1f1f1] rounded overflow-hidden">
        <div className="toolbar flex justify-between bg-black bg-opacity-10 items-center">
          {/* Was moved into Btn component
          <button className="hover:bg-gray-100 w-8 h-8 flex justify-center items-center">
            <IoAdd size={20}/>
          </button> */}
          <Btn click={() => addNote(blankNote)} icon={<IoAdd size={20} />} />
          <div className="flex">
            <Btn
              click={() => addNote()}
              icon={<IoSettingsOutline size={18} />}
            />
            <Btn click={() => addNote()} icon={<IoClose size={20} />} />
          </div>
        </div>
        <h1 className="text-2xl p-2">Sticky Notes</h1>
        <div className="flex m-2 bg-slate-300 justify-center items-center">
          <input
            type="text"
            placeholder="Searh..."
            className="bg-transparent w-full p-2 focus-visible:outline-none"
          />
          <Btn click={() => addNote()} icon={<IoSearch size={20} />} />
        </div>
        {notes.length > 0 && notes.map((x, i) => {
          return <div className="m-2">
            <div className="flex flex-col w-full p-2 bg-gray-300">
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
        })}
      </div>
      <div className="notesview w-full">
        {notes.length > 0 && notes.map((x, i) => {
          return <div className="flex flex-col bg-red-200 rounded overflow-hidden w-[400px] pb-1 mb-2">
            <div className="toolbar flex justify-between bg-black bg-opacity-10 items-center">
              <Btn click={() => addNote(blankNote)} icon={<IoAdd size={20} />} />
              <div className="flex">
                <Btn
                  click={() => addNote()}
                  icon={<IoSettingsOutline size={18} />}
                />
                <Btn click={() => addNote()} icon={<IoClose size={20} />} />
              </div>
            </div>
            <textarea
              placeholder="Take a note..."
              className="w-full bg-transparent focus-visible:outline-none p-2"
              name=""
              id=""
              cols="30"
              rows="2"
            ></textarea>
          </div>
        })}
        
      </div>
    </div>
  );
}

export default App;
