import React, { useContext } from 'react';
import { NotefulContext } from './NotefulContext'
import { NavLink, useHistory, useParams, useRouteMatch } from 'react-router-dom';

function FolderPanel() {
  // Get folders object from context and then destructure it
  // so we are only left with the array.
  const {folders} = useContext(NotefulContext);
  const {folders: foldersArr} = folders;

  //Make a list of all folders for the "/" path
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

  // Experimenting with getting the right info
  const {noteId} = useParams()
  const match = useRouteMatch();
  console.log(match);
  const singleFolder = foldersArr.find(folder => folder.id === noteId)

  const history = useHistory();
  console.log(history)

  return (
    <section className="FolderPanel_main-view">
      <ul className="FolderPanel_folder-list">
        {allFolders}
      </ul>
    </section>
  );
}

FolderPanel.defaultProps = {
  history: {},
  folders: {},
  foldersArr: [],
  singleFolder: {}, 
  allFolders: [],
  noteId: "",
  
};

export default FolderPanel;