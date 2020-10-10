require('dotenv').config();
const { API_ENDPOINT, API_KEY } = require('./config');

// Options callback for post calls
const postOptions = (data = {}) => {
  return {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${API_KEY}`
  },
  body: JSON.stringify(data)
}};

// Options callback for patch calls
const patchOptions = (data) => {
  const options = postOptions(data)
  return { ...options, method: "PATCH" }
}

// Options callback for delete calls
const deleteOptions = {  
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${API_KEY}`
  }
};


// Helper function for fetch calls
function fetchCall(url, options) {
  return fetch(url, options)
  .then(response => {
    if (!response.ok) {
      return response.json().then(error => { throw error});
    }
  
    if (options.method === 'DELETE' || options.method === 'PATCH') {
      return response.text();
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
  return fetchCall(`${API_ENDPOINT}/folders`, 
    {})
}

export function getNoteData() {
  return fetchCall(`${API_ENDPOINT}/notes`, 
   {})
}

export function postFolderData(data) {
  return fetchCall(`${API_ENDPOINT}/folders`, 
   postOptions(data))
}

export function postNoteData(data) {
  return fetchCall(`${API_ENDPOINT}/notes`, 
    postOptions(data))
}

export function deleteNoteData(noteId) {
  return fetchCall(`${API_ENDPOINT}/notes/${noteId}`,
  deleteOptions)
}

export function patchNoteData(noteId, data) {
  return fetchCall(`${API_ENDPOINT}/notes/${noteId}`,
  patchOptions(data))
}