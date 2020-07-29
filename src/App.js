import React from 'react';
import { Route } from 'react-router-dom';
import STORE from './dummy-store';
import Main from './main/Main'
import SideBar from './sidebar/SideBar';

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
                <SideBar folders={this.state.folders} />               
            }/>
          </div>
          <div className='Main_main-view'>
            <Route exact path='/' render={() => 
                <Main notes={this.state.notes}/>               
            }/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
