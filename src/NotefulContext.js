import { createContext } from 'react';

export const NotefulContext = createContext({
  folders: [],
  notes: [],
  selectedNote: {},
  selectedFolder: {},
  addFolder: () => {},
  deleteNote: () => {},
  deleteFolder: () => {},
})