import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { NotefulContext } from './components/NotefulContext';
import { routes } from './routes';

function App() {
  const [folders, setFolders] = useState([]);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({})

  useEffect(() => {
    fetch("http://localhost:9090/folders")
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json();
    })
    .then(data => {
      setFolders(data)
    })
    .catch(error => {
      console.log(error.message)
    }) 

    fetch("http://localhost:9090/notes")
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json();
    })
    .then(data => {
      setNotes(data)
    })
    .catch(error => {
      console.log(error.message)
    }) 
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