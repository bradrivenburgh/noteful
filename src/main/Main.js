import React from 'react';
import Note from '../note/Note';

function Main({ notes }) {
  const allNotes = notes.map(note => {
    return <Note note={note} key={note.id}/>
  })
  return (
    <div>
      {allNotes}      
      <button>Add Note</button>
    </div>
  );
}

export default Main;