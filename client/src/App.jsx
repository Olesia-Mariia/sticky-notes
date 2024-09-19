import { useEffect, useState } from 'react';
import './App.css';

import { getNotes } from './helpers/api';

import NotesListView from './components/NotesListView';
import NotesView from './components/NotesView';

function App() {
  const [notes, setNotes] = useState([]);
  const [listview, setListview] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newNotes = await getNotes();
        setNotes(newNotes);
      } catch (err) {
        console.error(err.mesage);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex p-5 flex-row">
      <NotesListView
        notes={notes}
        listview={listview}
        setListview={setListview}
        setNotes={setNotes}
      />
      {notes.length > 0 && (
        <NotesView
          notes={notes}
          setNotes={setNotes}
          listview={listview}
          setListview={setListview}
        />
      )}
    </div>
  );
}

export default App;
