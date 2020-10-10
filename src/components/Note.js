import React, { useContext } from 'react';
import moment from 'moment';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { NotefulContext } from '../NotefulContext';
import PropTypes from 'prop-types';
import { deleteNoteData } from '../fetchData';

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

  const handleDeleteNote = (noteId, cb, deleteFetch) => {
     deleteFetch(noteId)
      .then(data => cb(noteId))
      .catch(error => console.log(error))
  }

  // Get the current path name to create a conditional
  // Link that is disabled once it in note view. This
  // will cut down on unnecessary renders and improve the
  // ability of history to navigate back to the folder list
  // with a selected folder indicated
  const {pathname} = useLocation();
  const safeLink = (
      pathname === `/notes/${note.id}`
      ? <h2>{note.noteName}</h2>
      : (
        <Link 
          to={`/notes/${note.id}`} 
          onClick={() => handleClick(note)}
        >
          <h2>{note.noteName}</h2>
        </Link>
        )
  );
  return (
    <div className="Note_note-item-container">
      <div>
        {safeLink}
      </div>

      <div className="Note_button-date-container">
        <div>
            <span>Last modified on {date} </span>
        </div>
        <div className="Note_button-container">
          <button
            className="Note_button"
            onClick={() => {
              if (pathname === `/notes/${note.id}`) {
                setSelectedNote({})
                history.push("/")
              }
              handleDeleteNote(note.id, deleteNote, deleteNoteData)
            }}
          >
            Delete Note
          </button>
          <Link to="/edit-note">
            <button
              className="Note_button"
              onClick={() => {
                  setSelectedNote(note)
              }}
            >
              Edit Note
            </button>
          </Link>
        </div>
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