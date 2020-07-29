import React from 'react';
import moment from 'moment';

function Note({note}) {
  const date = moment(note.modified).format("do MMM YYYY");
  console.log(date) 
  return (
    <div className="Note_note-item">
      <h2>{note.name}</h2>
      <span>Last modified on {date}</span>
      <button>Delete Note</button>
    </div>
  );
}

export default Note;