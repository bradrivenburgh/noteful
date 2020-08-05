import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { NotefulContext } from './components/NotefulContext';
import { routes } from './routes';
import { getFolderData, getNoteData } from './fetchData';

function App() {
  const [folders, setFolders] = useState([]);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({})

  // Make fetch calls; functions from fetchData return
  // promises, so use .then() statments to call state
  // setter functions
  useEffect(() => {
    getFolderData().then(data => setFolders(data));
    getNoteData().then(data => setNotes(data));
  }, []);

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
            setSelectedNote
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