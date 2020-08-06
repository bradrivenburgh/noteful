import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import MainPanel from './MainPanel';

afterEach(cleanup);

describe('MainPanel component', () => {
  it('renders without crashing', () => {
    render(<Router><MainPanel /></Router>);
  });
});