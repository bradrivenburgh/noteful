import React, { useContext } from 'react';
import { NotefulContext } from './NotefulContext'
import { NavLink } from 'react-router-dom';

function SideBarMain() {
  // Get folders object from context and then destructure it
  // so we are only left with the array.
  const {folders} = useContext(NotefulContext);
  const {folders: foldersArr} = folders;

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

  return (
    <section className="FolderPanel_main-view">
      <ul className="FolderPanel_folder-list">
        {allFolders}
      </ul>
    </section>
  );
}

export default SideBarMain;