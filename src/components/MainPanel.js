import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NotefulContext } from './NotefulContext';
import Note from './Note';

function MainPanel() {
  // Get notes array from context
  const {notes} = useContext(NotefulContext);
  
  // Make a list of all notes for the "/" path
  const allNotes = notes.map(note => {
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
  
  // Create a list of filtered notes based on the folder.id of
  // the selected folder for the "folders/:foldersId" path
  const filteredByFolderId = notes.filter(note => note.folderId === params.folderId)
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
  const singleNote = notes
    .find(note => note.id === params.noteId) || {};
  
  // Create the views for the "/" and "/folders/:folderId" paths
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

  // Create the view for the "/notes/:notesId" path
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
  notes: [],
  params: "",
  filteredByFolderId: [],
  filteredNotes: [],
  singleNote: {},
};

export default MainPanel;