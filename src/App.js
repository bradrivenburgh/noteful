import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import STORE from './dummy-store'
import { NotefulContext } from './components/NotefulContext';
import { routes } from './routes';

function App() {
  const [folders, setFolders] = useState(STORE.folders);
  const [notes, setNotes] = useState(STORE.notes);

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
        <Link to='/'>            
            <h1>Noteful</h1>
        </Link>
      </header>
      <main className="App_main-content">
        <NotefulContext.Provider
          value={{
            folders: {folders},
            notes: {notes},
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