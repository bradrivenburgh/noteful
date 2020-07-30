import React from 'react';
import { Route } from 'react-router-dom';
import STORE from './dummy-store';
import MainNoteList from './main/MainNoteList'
import SideBarMain from './sidebar/SideBarMain';

class App extends React.Component {
  constructor() {
    super();
    this.state = STORE;
  }

  render() {    
    return (
      <div className='App_wrapper'>
        <header>
          <h1>Noteful</h1>
        </header>
        <main className='App_main-content'>
          <div className="SideBar_main-view">
            <Route exact path='/' render={() => 
                <SideBarMain folders={this.state.folders} />               
            }/>
          </div>
          <div className='Main_main-view'>
            <Route exact path='/' render={() => 
                <MainNoteList notes={this.state.notes}/>               
            }/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
