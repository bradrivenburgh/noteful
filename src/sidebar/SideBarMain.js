import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBarMain({folders}) {
  const allFolders = folders.map(folder => {
    return (
      <li key={folder.id} className="SideBar_folder-item">
        <NavLink 
          to={`/folders/${folder.id}`}
        />
        {folder.name}
      </li>
    );
  })
  return (
    <section>
      <ul className="SideBar_folder-list">
        {allFolders}
      </ul>
      <div >
        <button>Add Folder</button>
        <p>Main route: list of all folders (as buttons)</p>
        <p>Folder route: list of this.props.folders with one selected</p>
        <p>Note route: only show the "go back" button</p>
      </div>
    </section>
  );
}

export default SideBarMain;