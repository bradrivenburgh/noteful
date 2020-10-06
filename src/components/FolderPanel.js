import React, { useContext } from 'react';
import { NotefulContext } from '../NotefulContext'
import { NavLink, Link, useHistory } from 'react-router-dom';

function FolderPanel() {
  // Get state data from context
  const {folders=[], selectedNote, setSelectedNote, setSelectedFolder} = useContext(NotefulContext);

  // Pull the selectedNote value from context and and find the matching
  // folder_id in the folders array; for the "note/:noteId" path
  let singleFolder = folders
    .find(folder => folder.id === selectedNote.folder_id) || {};

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

  // The view for the "/" path
  const allFolders = folders.map(folder => {
    return (
      <li key={folder.id} className="FolderPanel_folder-item" >
        <NavLink 
          to={`/folders/${folder.id}`}
          activeClassName="selected"
          onClick={() => setSelectedFolder(folder)}
        >
          <p>{folder.folder_name}</p>
        </NavLink>
      </li>
    );
  }) || [];
  
  // The view for the "notes/:noteId" path
  const noteView = (
    <>
      <button onClick={handleClick}>Go Back</button>
      <h2>{singleFolder.folder_name}</h2>
    </>
  );

  // Only display noteView (with folder name displayed and go back
  // button in place) if the user clicked on a note that were filtered by
  // folderId 
  return (
    <section className="FolderPanel_main-view">
      <ul className="FolderPanel_folder-list">
        {Object.keys(singleFolder).length
        ? noteView
        : allFolders}

      </ul>
      <Link to="/add-folder" >
        <button>Add Folder</button>
      </Link>
    </section>
  );
}

export default FolderPanel;