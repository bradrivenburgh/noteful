import React, { useContext } from 'react';
import { NotefulContext } from './NotefulContext'
import { NavLink, useHistory } from 'react-router-dom';

function FolderPanel() {
  // Get state data from context
  const {folders, selectedNote, setSelectedNote} = useContext(NotefulContext);

  // Make a list of all folders for the "/" path
  const allFolders = folders.map(folder => {
    return (
      <li key={folder.id} className="FolderPanel_folder-item" >
        <NavLink 
          to={`/folders/${folder.id}`}
          activeClassName="selected"
        >
          <h4>{folder.name}</h4>
        </NavLink>
      </li>
    );
  });

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
  
  // The view for the "notes/:noteId" path
  const noteView = (
    <>
      <button onClick={handleClick}>Go Back</button>
      <h2>{singleFolder.name}</h2>
    </>
  );

  return (
    <section className="FolderPanel_main-view">
      <ul className="FolderPanel_folder-list">
        {Object.keys(singleFolder).length
        ? noteView
        : allFolders}

      </ul>
    </section>
  );
}

FolderPanel.defaultProps = {
  history: {},
  folders: [],
  allFolders: [],
  noteId: "",  
};

export default FolderPanel;