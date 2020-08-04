import React from 'react';
import { Link } from 'react-router-dom';

function SideBarNote({routerProps, folder}) {
  const handleClick = () => {
    routerProps.history.goBack();
  };
  
  return (
    <section>
      <Link onClick={handleClick}>Go Back</Link>
      <h2>{folder.name}</h2>
    </section>
  );
  
}

export default SideBarNote;