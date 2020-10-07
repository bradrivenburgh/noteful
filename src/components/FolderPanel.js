import React, { useContext } from 'react';
import { NotefulContext } from '../NotefulContext'
import { NavLink, Link, useHistory } from 'react-router-dom';

function FolderPanel() {
  // Get state data from context
  const {folders=[], selectedNote, setSelectedNote, setSelectedFolder} = useContext(NotefulContext);

  // Pull the selectedNote value from context and and find the matching
  // folderId in the folders array; for the "note/:noteId" path
  let singleFolder = folders
    .find(folder => folder.id === selectedNote.folderId) || {};

  // Get the history for the goBack() functionality for the 
  // "Go Back" button; for the "/notes/:noteId" path
  const history = useHistory();

  // When the "Go Back" button is clicked, set the selectedNote
  // in state back to an empty object in order to render the
  // folder list again; for the "note/:noteId" path 
  const handleClick = () => {
    setSelectedNote({})
    history.goBack();
  }

  // The view for the "/" and "/folders/:folderId" path
  const allFolders = folders.map(folder => {
    return (
      <li key={folder.id} className="FolderPanel_folder-item" >
        <NavLink 
          to={`/folders/${folder.id}`}
          activeClassName="selected"
          onClick={() => setSelectedFolder(folder)}
        >
          <p>{folder.folderName}</p>
        </NavLink>
      </li>
    );
  }) || [];

  const defaultView = (
    <>
      {allFolders}
      <Link to="/add-folder" >
        <button>Add Folder</button>
      </Link>
    </>
  )
  
  // The view for the "notes/:noteId" path
  const singleNoteView = (
    <>
      <button onClick={handleClick}>Go Back</button>
      <h2>{singleFolder.folderName}</h2>
    </>
  );

  // Only display noteView (with folder name displayed and go back
  // button in place) if the user clicked on a note that were filtered by
  // folderId 
  return (
    <section className="FolderPanel_main-view">
      <ul className="FolderPanel_folder-list">
        {Object.keys(singleFolder).length
        ? singleNoteView
        : defaultView}

      </ul>
    </section>
  );
}

export default FolderPanel;