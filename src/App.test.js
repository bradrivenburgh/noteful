import React from 'react';
import App from './App';
import { NotefulContext } from './NotefulContext';
import {BrowserRouter as Router} from 'react-router-dom';
import { act, render, fireEvent, cleanup, screen} from '@testing-library/react';

afterEach(cleanup);

describe('App component', () => {
  test('renders without crashing', () => {
    render(<Router><App /></Router>);

  });

  test('updates Context value from child component', () => {
    const { container, getByText } = render(<Router><App /></Router>);
    expect(getByText(/Cats/i));

    screen.debug()
  });
})