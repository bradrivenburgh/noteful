import { createContext } from 'react';

export const NotefulContext = createContext({
  folders: [],
  notes: [],
  selectedNote: {},
  addFolder: () => {},
  deleteNote: () => {},
})