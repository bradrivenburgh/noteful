import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Note from './Note';

describe('Note component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Note /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});