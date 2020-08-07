import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { NotefulContext } from './NotefulContext';
import { routes } from './routes';

function App({service}) {

  const [folders, setFolders] = useState([]);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({})

  // Make fetch calls; functions from fetchData return
  // promises, so use .then() statements to call state
  // setter functions
  useEffect(() => {
    service.getFolderData().then(data => setFolders(data));
    service.getNoteData().then(data => setNotes(data));
  }, []);

  const deleteNote = (noteId) => {
    const notesPostDelete = notes
      .filter(note => note.id !== noteId);
    setNotes(notesPostDelete);
  }

  const routeList = routes.map((route, index) => (
    <Route 
      key={index}
      path={route.path}
      exact={route.exact}
      children={() => 
        <>
          <route.folderPanel />
          <route.mainPanel />
        </>
      }
    />
  ))
  
  return (
    <>
      <header>
        <Link 
          to='/' 
          onClick={() => setSelectedNote({})}
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
            setSelectedNote,
            deleteNote
          }}
        >
          <Switch>
            {routeList}
          </Switch>
        </NotefulContext.Provider>
      </main>
    </>
  );
}

export default App;