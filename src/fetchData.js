// Options callback for post calls
const postOptions = (data) => {
  return {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
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
  return fetchCall("http://localhost:8000/api/folders", 
    {})
}

export function getNoteData() {
  return fetchCall("http://localhost:8000/api/notes", 
   {})
}

export function postFolderData(data) {
  return fetchCall("http://localhost:8000/api/folders", 
   postOptions(data))
}

export function postNoteData(data) {
  return fetchCall("http://localhost:8000/api/notes", 
    postOptions(data))
}