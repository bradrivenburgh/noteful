import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, cleanup } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import FolderPanel from './FolderPanel';

afterEach(cleanup);

describe('FolderPanel component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <FolderPanel />
      </Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});