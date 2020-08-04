import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NotefulContext } from './NotefulContext';
import moment from 'moment';

function Note({note}) {
  const date = moment(note.modified).format("do MMM YYYY");
  
  const {setSelectedNote} = useContext(NotefulContext);
  const handleClick = (note) => {
    setSelectedNote(note)
  }
  
  return (
    <div className="Note_note-item">
      <Link 
        to={`/notes/${note.id}`}
        onClick={() => handleClick(note)}
      >
        <h2>{note.name}</h2>
      </Link>
      <span>Last modified on {date} </span>
      <button>Delete Note</button>
    </div>
  );
}

export default Note;