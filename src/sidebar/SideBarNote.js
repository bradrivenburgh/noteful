import React from 'react';
import { Link } from 'react-router-dom';

function SideBarNote({routerProps, folder}) {
  return (
    <section>
      <Link>
          <button>Go Back</button>
      </Link>
      <h2>{folder.name}</h2>
    </section>
  );
  
}

export default SideBarNote;

//routerProps.match