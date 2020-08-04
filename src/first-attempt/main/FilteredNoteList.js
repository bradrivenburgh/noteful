import React from 'react';
import NoteMain from '../note/NoteMain';

function FilteredNoteList({ notes, routerProps}) {
  const filteredByFolderId = notes.filter(note => note.folderId === routerProps.match.params.folderId)
  const filteredNotes = filteredByFolderId.map(note => {
    return (
      <li key={note.id}>
        <NoteMain note={note}/>
      </li>
    );
  })
  return (
    <section>
      <ul className="Note_note-list">
        {filteredNotes}      
      </ul>
      <div>
        <button>Add Note</button>
      </div>
    </section>
  );
}

FilteredNoteList.defaultProps = {notes: []};

export default FilteredNoteList;