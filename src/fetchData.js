require('dotenv').config();
const { API_URL } = require('./config')

// Options callback for post calls
const postOptions = (data) => {
  return {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": 'application/json'
  },
  body: JSON.stringify(data)
}}

// Helper function for fetch calls
function fetchCall(url, options) {
  return fetch(url, options)
  .then(response => {
    if (!response.ok) {
      const error = new Error(response.statusText)
      throw error;
    }
    return response.json();
  })
  .then(data => {
    return data;
  })
  .catch(error => {
    throw error;
  });
}

export function getFolderData() {
  console.log(API_URL)
  return fetchCall(`${API_URL}/folders`, 
    {})
}

export function getNoteData() {
  return fetchCall(`${API_URL}/notes`, 
   {})
}

export function postFolderData(data) {
  return fetchCall(`${API_URL}/folders`, 
   postOptions(data))
}

export function postNoteData(data) {
  return fetchCall(`${API_URL}/notes`, 
    postOptions(data))
}