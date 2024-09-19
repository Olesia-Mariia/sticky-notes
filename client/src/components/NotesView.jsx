import { useEffect } from 'react';
import { createSwapy } from 'swapy';

import NoteView from './NoteView';

const NotesView = ({ notes, setNotes, listview, setListview }) => {
  useEffect(() => {
    const container = document.querySelector('.notesview');
    const swapy = createSwapy(container);
    swapy.onSwap(({ data }) => {
      console.log('data', data);
      // localStorage.setItem('slotItem', JSON.stringify(data.object));
    });

    return () => {
      swapy.destroy();
    };
  }, []);

  return (
    <div className="notesview w-full flex flex-wrap content-start items-start">
      {notes.map((note) => {
        if (note.view) {
          return (
            <div
              key={`note-${note.note_id}`}
              className="slot"
              data-swapy-slot={`slot-${note.note_id}`}
            >
              <NoteView
                note={note}
                setNotes={setNotes}
                listview={listview}
                setListview={setListview}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default NotesView;
