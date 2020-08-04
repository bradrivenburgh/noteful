import { createContext } from 'react';

export const NotefulContext = createContext({
  folders: [],
  notes: [],
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {}
})