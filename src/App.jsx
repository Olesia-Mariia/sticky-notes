import { useState } from "react";
import "./App.css";
import { IoAdd, IoSettingsOutline, IoClose } from "react-icons/io5"
import Btn from "./components/Btn"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex p-5 flex-row">
      <div className="noteslist border w-[280px] h-full mr-2 bg-[#e5e5e5] rounded overflow-hidden">        
        <div className="toolbar flex justify-between bg-black bg-opacity-10 items-center">
          {/* Was moved into Btn component
          <button className="hover:bg-gray-100 w-8 h-8 flex justify-center items-center">
            <IoAdd size={20}/>
          </button> */}
          <Btn click={() => addNote()} icon={<IoAdd size={20}/>} />
          <div className="flex">
            <Btn click={() => addNote()} icon={<IoSettingsOutline size={18}/>} />
            <Btn click={() => addNote()} icon={<IoClose size={20}/>} />
          </div>
        </div>
        <h1 className="text-2xl p-2">Sticky Notes</h1>
      </div>
      <div className="notesview border w-full">
        <h1>Notes View</h1>
      </div>
    </div>
  );
}

export default App;
