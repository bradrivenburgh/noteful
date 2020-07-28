import React from 'react';
import STORE from './dummy-store';

class App extends React.Component {
  constructor() {
    super();
    this.state = STORE;
  }

  render() {    
    return (
      <main className='App'>
        {/* content goes here */}
      </main>
    );
  }
}

export default App;
