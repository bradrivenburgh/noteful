import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NotefulContext } from './NotefulContext';
import Note from './Note';

function MainPanel() {
  // Get notes object from context and then destructure it
  // so we are only left with the array.
  const {notes} = useContext(NotefulContext);
  const {notes: notesArr} = notes;
  
  // Make a list of all notes for the "/" path
  const allNotes = notesArr.map(note => {
    return (
      <li key={note.id}>
        <Note 
          note={note}
        />
      </li>
    );
  });

  // Get the folderId from the current path
  let params = useParams();
  
  // Filter notes based on the folder.id of the selected
  // folder in the FolderPanel for the "folders/:foldersId" path
  const filteredByFolderId = notesArr.filter(note => note.folderId === params.folderId)
  const filteredNotes = filteredByFolderId.map(note => {
    return (
      <li key={note.id}>
        <Note 
          note={note}
        />
      </li>
    );
  });

  // Return only the note that was clicked on for the
  // "/notes/:noteId" path
  const singleNote = notesArr
    .find(note => note.id === params.noteId) || {};
  
  const defaultAndFilteredView = (
    <>
      <ul className="Note_note-list">
        {filteredNotes.length 
          ? filteredNotes :
          allNotes}
      </ul>
      <button>Add Note</button>
    </>
  );
  const singleNoteView = (
    <>
      <ul className="Note_note-list">
        <Note note={singleNote} />
      </ul>
      <p>{singleNote.content}</p>
    </>
  );
  
  return (
    <section className="MainPanel_main-view">
      { Object.keys(singleNote).length
        ? singleNoteView :
        defaultAndFilteredView }      
    </section>
  );
}

MainPanel.defaultProps = {
  notes: {},
  notesArr: [], 
  params: "",
  filteredByFolderId: [],
  filteredNotes: [],
  singleNote: {},
};

export default MainPanel;