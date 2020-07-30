import React from 'react';
import NoteSolo from '../note/NoteSolo';

function SingleNoteList({ note }) {
  return (
    <section>
      <NoteSolo note={note}/>
    </section>
  );
}

SingleNoteList.defaultProps = {note: []};

export default SingleNoteList;