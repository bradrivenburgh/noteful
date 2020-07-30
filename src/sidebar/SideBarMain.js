import React from 'react';

function SideBarMain() {
  return (
    <div >
      <p>Main route: list of all folders (as buttons)</p>
      <p>Folder route: list of this.props.folders with one selected</p>
      <p>Note route: only show the "go back" button</p>
    </div>
  );
}

export default SideBarMain;