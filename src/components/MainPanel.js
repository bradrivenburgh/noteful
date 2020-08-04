import React, { useContext } from 'react';
import { NotefulContext } from './NotefulContext';
import Note from './Note';

function MainPanel() {
  // Get notes object from context and then destructure it
  // so we are only left with the array.
  const {notes} = useContext(NotefulContext);
  const {notes: notesArr} = notes;
  
  // Make a list of all notes for the "/" path
  const allNotes = notesArr.map(note => {
    return (
      <li key={note.id}>
        <Note note={note}/>
      </li>
    );
  })

  return (
    <section className="MainPanel_main-view">
      <ul className="Note_note-list">
        {allNotes}
      </ul>
      <div>
        <button>Add Note</button>
      </div>
    </section>
  );
}

MainPanel.defaultProps = {notes: []};

export default MainPanel;