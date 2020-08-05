import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NotefulContext } from './NotefulContext';
import moment from 'moment';

function Note({note}) {
  // Format the "Last modified" date string
  const date = moment(note.modified).format("do MMM YYYY");
  
  // Get the selectedNote state from context and set it the note prop
  const {setSelectedNote} = useContext(NotefulContext);
  const handleClick = (note) => {
    setSelectedNote(note)
  }
  
  // Get the current path name to create a conditional
  // Link that is disabled once it in note view. This
  // will cut down on unnecessary renders and improve the
  // ability of history to navigate back to the folder list
  // with a selected folder indicated
  const {pathname} = useLocation();
  const safeLink = (
      pathname === `/notes/${note.id}`
      ? <h2>{note.name}</h2>
      : (
        <Link 
          to={`/notes/${note.id}`} 
          onClick={() => handleClick(note)}
        >
          <h2>{note.name}</h2>
        </Link>
        )
  );

  return (
    <div className="Note_note-item">
      {safeLink}
      <div 
        className="Note_note-item_button-layout"
      >
        <span>Last modified on {date} </span>
        <button>Delete Note</button>
      </div>
    </div>
  );
}

export default Note;