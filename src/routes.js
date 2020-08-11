import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FolderPanel from './components/FolderPanel';
import MainPanel from './components/MainPanel';
import AddNote from './components/AddNote';

  export const routes = 
    <Switch>
      <Route path="/folders/:folderId">
        <FolderPanel />
        <MainPanel />
      </Route>
      <Route path="/notes/:noteId">
        <FolderPanel />
        <MainPanel />
      </Route>
      <Route path="/add-note">
        <AddNote />
      </Route>
      <Route path="/">
        <FolderPanel />
        <MainPanel />
      </Route>
    </Switch>