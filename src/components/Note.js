import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { NotefulContext } from '../NotefulContext';
import moment from 'moment';
import PropTypes from 'prop-types';

function Note({ note }) {
  // Format the "Last modified" date string
  const date = moment(note.modified).format("do MMM YYYY");
  
  // Get the selectedNote state from context and set it the note prop
  const {setSelectedNote, deleteNote} = useContext(NotefulContext);
  const handleClick = (note) => {
    setSelectedNote(note)
  }

  // get history to allow the app to navigate back to the
  // "/" path when a note is deleted
  const history = useHistory();

  const handleDeleteNote = (noteId, cb) => {
    fetch(`http://localhost:8000/api/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(error => {
          throw error
        });
      }
     // return response.json();
    })
    .then(data => cb(noteId))
    .catch(error => console.error(error))
  }

  // Get the current path name to create a conditional
  // Link that is disabled once it in note view. This
  // will cut down on unnecessary renders and improve the
  // ability of history to navigate back to the folder list
  // with a selected folder indicated
  const {pathname} = useLocation();
  const safeLink = (
      pathname === `/notes/${note.id}`
      ? <h2>{note.note_name}</h2>
      : (
        <Link 
          to={`/notes/${note.id}`} 
          onClick={() => handleClick(note)}
        >
          <h2>{note.note_name}</h2>
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
        <button
          onClick={() => {
            if (pathname === `/notes/${note.id}`) {
              setSelectedNote({})
              history.push("/")
            }
            handleDeleteNote(note.id, deleteNote)
          }}
        >
          Delete Note
        </button>
      </div>
    </div>
  );
}

Note.defaultProps = {
  note: {},
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    modified: PropTypes.string,
    folderName: PropTypes.string,
    folderId: PropTypes.number,
    content: PropTypes.string,
  }).isRequired
}

export default Note;