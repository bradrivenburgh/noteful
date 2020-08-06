import React from 'react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('App component', () => {
  test('renders without crashing', () => {
    render(<Router><App /></Router>);

    // screen.debug()
  });
})