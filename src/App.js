import React from 'react';
import { Route, Link } from 'react-router-dom';
import STORE from './dummy-store';
import MainNoteList from './main/MainNoteList';
import FilteredNoteList from './main/FilteredNoteList';
import SingleNoteList from './main/SingleNoteList';
import SideBarMain from './sidebar/SideBarMain';
import SideBarNote from './sidebar/SideBarNote';

class App extends React.Component {
  constructor() {
    super();
    this.state = STORE;
  }

  singleNote = (routerProps) => {
    return STORE.notes.find(note => note.id === routerProps.match.params.noteId)
  }

  singleFolder = ((routerProps, note) => {
    return this.state.folders.find(folder => folder.id === note.folderId)
  })

  render() {    
    return (
      <div className='App_wrapper'>
        <header>
          <Link to={'/'}>            
          <h1>Noteful</h1>
          </Link>
        </header>
        <main className='App_main-content'>
          <Route exact path='/' render={() =>
            <>
              <div className="SideBar_main-view">
                <SideBarMain folders={this.state.folders} />
              </div>
              <div className="Main_main-view">
                <MainNoteList notes={this.state.notes}/>               
              </div>
            </>
          }/>
          <Route path='/folders/:folderId' render={(routerProps) => 
            <>
              <div className="SideBar_main-view">
                <SideBarMain folders={this.state.folders} />
              </div>
              <div className="Main_main-view">
                <FilteredNoteList 
                  notes={this.state.notes} 
                  routerProps={routerProps}/>               
              </div>
            </>
          }/>
          <Route
            path='/notes/:noteId' render={(routerProps) => 
            <>
              <div className="SideBar_main-view">
                <SideBarNote
                  folder={this.singleFolder(routerProps, this.singleNote(routerProps))}
                  routerProps={routerProps} 
                />
              </div>
              <div className="Main_main-view">
                <SingleNoteList
                  note={this.singleNote(routerProps)} 
                  routerProps={routerProps}/>               
              </div>
            </>
          }
          />
        </main>
      </div>
    );
  }
}

export default App;
