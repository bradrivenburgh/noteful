import React from 'react';
import Note from '../note/Note';

function MainNoteList({ notes }) {
  const allNotes = notes.map(note => {
    return (
      <li key={note.id}>
        <Note note={note}/>
      </li>
    );
  })
  return (
    <section>
      <ul className="Note_note-list">
        {allNotes}      
      </ul>
      <div>
        <button>Add Note</button>
      </div>
    </section>
  );
}

MainNoteList.defaultProps = {notes: []};

export default MainNoteList;