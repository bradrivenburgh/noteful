import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { getFolderData, getNoteData } from './fetchData';
import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App service={{getFolderData, getNoteData}} />
  </BrowserRouter>,
  document.getElementById('root')
);