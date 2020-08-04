import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBarMain({folders}) {
  const allFolders = folders.map(folder => {
    return (
      <li key={folder.id} className="SideBar_folder-item">
        <NavLink 
          to={`/folders/${folder.id}`}
          activeClassName="selected"
        >
          <h4>{folder.name}</h4>
        </NavLink>
      </li>
    );
  })
  return (
    <section>
      <ul className="SideBar_folder-list">
        {allFolders}
      </ul>
    </section>
  );
}

export default SideBarMain;