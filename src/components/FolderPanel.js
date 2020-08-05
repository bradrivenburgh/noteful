import React, { useContext } from 'react';
import { NotefulContext } from './NotefulContext'
import { NavLink, useHistory } from 'react-router-dom';

function FolderPanel() {
  // Get folders object from context and then destructure it
  // so we are only left with the array.
  const {folders, selectedNote, setSelectedNote} = useContext(NotefulContext);
  const {folders: foldersArr} = folders;

  // Make a list of all folders for the "/" path
  const allFolders = foldersArr.map(folder => {
    return (
      <li key={folder.id} className="FolderPanel_folder-item">
        <NavLink 
          to={`/folders/${folder.id}`}
          activeClassName="selected"
        >
          <h4>{folder.name}</h4>
        </NavLink>
      </li>
    );
  });

  // Pull the selectedNote value from context and compare its
  // folderId with the folderIds in the folders array; for the
  // "note/:noteId"
  let singleFolder = foldersArr
    .find(folder => folder.id === selectedNote.folderId) || {};

  // Get the history for the goBack() functionality for the 
  // "Go Back" button
  const history = useHistory();

  // Set the selectedNote in state back to an empty object
  // in order to render the folder list again
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
  folders: {},
  foldersArr: [],
  allFolders: [],
  noteId: "",
  
};

export default FolderPanel;