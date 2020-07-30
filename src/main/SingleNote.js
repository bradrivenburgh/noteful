import React from 'react';
import NoteSolo from '../note/NoteSolo';

function SingleNote({ note, routerProps}) {
  return (
    <section>
      <NoteSolo />
    </section>
  );
}

FilteredNoteList.defaultProps = {notes: []};

export default SingleNote;