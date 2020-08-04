import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBarMain({folders}) {
  // const allFolders = folders.map(folder => {
  //   return (
  //     <li key={folder.id} className="SideBar_folder-item">
  //       <NavLink 
  //         to={`/folders/${folder.id}`}
  //         activeClassName="selected"
  //       >
  //         <h4>{folder.name}</h4>
  //       </NavLink>
  //     </li>
  //   );
  // })
  return (
    <section className="FolderPanel_main-view">
      <ul className="FolderPanel_folder-list">
        <li className="FolderPanel_folder-item">Some Placeholder Folder Content</li>
        <li className="FolderPanel_folder-item">Some Placeholder Folder Content</li>
        <li className="FolderPanel_folder-item">Some Placeholder Folder Content</li>
        <li className="FolderPanel_folder-item">Some Placeholder Folder Content</li>
      </ul>
    </section>
  );
}

export default SideBarMain;