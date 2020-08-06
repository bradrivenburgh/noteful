import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Note from './Note';

describe('Note component', () => {
  it('renders without crashing', () => {
    render(<Router><Note /></Router>);
  });
  
  it('has a Delete Note button', () => {
    render(<Router><Note /></Router>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  
});