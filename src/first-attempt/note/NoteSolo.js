import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function NoteSolo({note}) {
  const date = moment(note.modified).format("do MMM YYYY");
  return (
    <div>
      <div className="Note_note-item">
        <Link to={`/notes/${note.id}`}>
          <h2>{note.name}</h2>
        </Link>
        <span>Last modified on {date} </span>
        <button>Delete Note</button>
      </div>
      {note.content}
    </div>
  );
}

export default NoteSolo;