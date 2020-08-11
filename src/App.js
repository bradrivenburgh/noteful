import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NotefulContext } from './NotefulContext';
import { routes } from './routes';

function App({service}) {
  // TO-DO -------------Create PropTypes for service prop


  const [folders, setFolders] = useState([]);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({});
  const [selectedFolder, setSelectedFolder] = useState({});
  const {pathname} = useLocation();

  // Inject fetch calls; "get" functions from fetchData return
  // promises, so use .then() statements to call state
  // setter functions; new fetch calls are made whenever
  // the pathname changes in order to keep the notes current
  
  useEffect(() => {
    service.getFolderData().then(data => setFolders(data));
    service.getNoteData().then(data => setNotes(data));
  }, [service, pathname]);

  const deleteNote = (noteId) => {
    const notesPostDelete = notes
      .filter(note => note.id !== noteId);
    setNotes(notesPostDelete);
  }

  return (
    <>
      <header>
        <Link
          to='/'
          onClick={() => {
            setSelectedNote({})
            setSelectedFolder({})
          }}
        >
            <h1>Noteful</h1>
        </Link>
      </header>
      
      <main className="App_main-content">
        <NotefulContext.Provider
          value={{
            folders,
            notes,
            selectedNote,
            selectedFolder,
            setSelectedNote,
            setSelectedFolder,
            deleteNote
          }}
        >
          {routes}
        </NotefulContext.Provider>
      </main>
    </>
  );
}

export default App;