import React from 'react';
import NoteMain from '../note/NoteMain';

function MainNoteList({ notes }) {
  const allNotes = notes.map(note => {
    return (
      <li key={note.id}>
        <NoteMain note={note}/>
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