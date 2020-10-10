import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NotefulContext } from './NotefulContext';
import { routes } from './routes';
import BoundaryError from './components/BoundaryError';
import PropTypes from 'prop-types';

function App({service}) {
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
    Promise.all([
      service.getFolderData(),
      service.getNoteData()
    ])
    .then(([foldersRes, notesRes]) => {
      setFolders(foldersRes);
      setNotes(notesRes);
    })
    .catch(error => 
      console.log(error)
    )
  }, [service, pathname]);

  const deleteNote = (noteId) => {
    const notesPostDelete = notes
      .filter(note => note.id !== noteId);
    setNotes(notesPostDelete);
  }

  const deleteFolder = (folderId) => {
    const foldersPostDelete = folders
      .filter(folder => folder.id !== folderId);
    setFolders(foldersPostDelete);

    const notesPostDelete = notes
      .filter(note => note.folderId !== folderId);
    setNotes(notesPostDelete);
  }

  // Values to be provided to the NotefulContext.Provider
  const notefulContextValues = {
    folders,
    notes,
    selectedNote,
    selectedFolder,
    setSelectedNote,
    setSelectedFolder,
    deleteNote,
    deleteFolder,
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
        <BoundaryError>
          <NotefulContext.Provider
            value={notefulContextValues}
          >
            {routes}
          </NotefulContext.Provider>
        </BoundaryError>
      </main>
    </>
  );
}

App.propTypes = {
  service: PropTypes.shape({
    getFolderData: PropTypes.func.isRequired,
    getNoteData: PropTypes.func.isRequired,
  })
}

export default App;