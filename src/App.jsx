import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex p-5 flex-row">
      <div className="noteslist border w-[280px] h-full">
        <h1>Sticky Notes</h1>
      </div>
      <div className="notesview border w-full">
        <h1>Notes View</h1>
      </div>
    </div>
  );
}

export default App;
