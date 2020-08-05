export function getFolderData() {
  
  return fetch("http://localhost:9090/folders")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json();
  })
  .then(data => {
    return data;
  })
  .catch(error => {
    console.log(error.message)
  });

}

export function getNoteData() {
  return fetch("http://localhost:9090/notes")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json();
  })
  .then(data => {
    return data;
  })
  .catch(error => {
    console.log(error.message)
  });
}